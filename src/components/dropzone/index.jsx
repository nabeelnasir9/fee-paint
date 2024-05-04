import { useDropzone } from "react-dropzone";
import { InfinitySpin } from "react-loader-spinner";
import { BsImageAlt } from "react-icons/bs";
import { useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../config/AuthContext";

// eslint-disable-next-line react/prop-types
export default function Accept() {
  const { setUploadImage } = useContext(AuthContext);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const { getRootProps, getInputProps, open, isDragAccept, isDragReject } =
    useDropzone({
      noClick: true,
      noKeyboard: true,
      maxFiles: 1,
      accept: {
        "image/*": [".jpeg", ".png"],
      },
      onDrop: (acceptedFiles, fileRejections) => {
        if (fileRejections.length > 0) {
          toast.error("Unsupported file type");
          console.log("Rejected files:", fileRejections);
        } else {
          setFiles(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              }),
            ),
          );
          const apiKey = import.meta.env.VITE_BB_API_KEY;
          const imageFile = acceptedFiles[0];
          const formData = new FormData();
          formData.append("image", imageFile);
          setUploading(true);
          fetch("https://api.imgbb.com/1/upload?key=" + apiKey, {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => {
              toast.success("Image uploaded successfully");
              console.log("Uploaded image URL:", data.data.url);
              setUploadImage(data.data.url);
            })
            .catch((error) => {
              toast.error("Error uploading Image!");
              console.error("Error uploading image to imgbb:", error);
            })
            .finally(() => {
              setUploading(false);
            });
        }
      },
    });

  const thumbs = files.map((file) => (
    <div className="flex w-32 h-32 mt-5 mb-10 rounded-xl" key={file.name}>
      <div className="thumb-inner">
        <img
          src={file.preview}
          className="border-[#587cdd] border-2 rounded-xl animate-fade-up animate-duration-500"
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
        className="generate-upload-button"
        onClick={open}
      >
        <input {...getInputProps()} />
        {uploading ? (
          <InfinitySpin color="#587cdd" width="200" visible={true} />
        ) : (
          <BsImageAlt className="animate-fade" />
        )}
        {isDragAccept && <p className="text-base mt-1">Supported</p>}
        {isDragReject && (
          <p className="text-base mt-1">
            That doesn&apos;t look like an image 😕
          </p>
        )}
      </div>
      <aside>{thumbs}</aside>
    </div>
  );
}
