import { createContext, useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [selectedType, setSelectedType] = useState("Paint Generation");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [imagesToMake, setImagesToMake] = useState(1);
  const [selectedDimension, setSelectedDimension] = useState("8:11");
  const [imageStyle, setImageStyle] = useState("");
  const [results, setResults] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationKey: ["generate"],
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
    selectedStyle,
    setSelectedStyle,
    imageStyle,
    setImageStyle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
