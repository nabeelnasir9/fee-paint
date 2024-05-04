import { createContext, useState } from "react";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [selectedType, setSelectedType] = useState("Paint Generation");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [imageStyle, setImageStyle] = useState("");
  const [results, setResults] = useState([]);
  const value = {
    selectedType,
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
