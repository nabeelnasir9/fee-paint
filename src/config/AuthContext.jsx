import { createContext, useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [selectedType, setSelectedType] = useState("Paint Generation");
  const [selectedItem, setSelectedItem] = useState(null);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [imagesToMake, setImagesToMake] = useState(1);
  const [orders, setOrders] = useState([]);
  const [trackingId, setTrackingId] = useState("");
  const [imagesToMake2, setImagesToMake2] = useState(1);
  const [selectedDimension, setSelectedDimension] = useState("8:11");
  const [selectedDimension2, setSelectedDimension2] = useState("8:11");
  const [imageStyle, setImageStyle] = useState("");
  const [results, setResults] = useState([]);
  const [results2, setResults2] = useState([]);
  const [uploadImage, setUploadImage] = useState([]);
  const [mysteryPaintKit, setMysteryPaintKit] = useState(null);
  const imgtoImgMutation = useMutation({
    mutationKey: ["imgtoimg"],
    mutationFn: (data) => {
      return axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/generate/imgtoimg`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    },
    onSuccess: (data) => {
      setResults2((prevData) => [...prevData, ...data.data]);
      toast.success("Image Generated Successfully");
    },
    onError: (error) => {
      console.error("Mutation error:", error);
      toast.error("Error occurred while generating image");
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["paint"],
    mutationFn: (data) => {
      return axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/generate/multi`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    },
    onSuccess: (data) => {
      setResults((prevData) => [...prevData, ...data.data]);
      toast.success("Image Generated Successfully");
    },
    onError: (error) => {
      console.error("Mutation error:", error);
      toast.error("Error occurred while generating image");
    },
  });

  const value = {
    mutate,
    isPending,
    selectedType,
    textAreaValue,
    setTextAreaValue,
    imagesToMake,
    setImagesToMake,
    selectedDimension,
    setSelectedDimension,
    results,
    setResults,
    setSelectedType,
    imagesToMake2,
    setImagesToMake2,
    selectedStyle,
    setSelectedStyle,
    imgtoImgMutation,
    imageStyle,
    selectedDimension2,
    setSelectedDimension2,
    setImageStyle,
    results2,
    setResults2,
    uploadImage,
    setUploadImage,
    orders,
    setOrders,
    trackingId,
    setTrackingId,
    mysteryPaintKit,
    setMysteryPaintKit,
    selectedItem,
    setSelectedItem,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
