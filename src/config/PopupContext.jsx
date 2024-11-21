/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import axios from "axios";
import React from "react";
import { useMutation } from "@tanstack/react-query";
export const PopupContext = React.createContext();

export const PopupProvider = ({ children }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [phoneNumber, setPhoneNumber] = React.useState("");

  const [popupState, setPopupState] = React.useState({
    firstPopupVisible: false,
    secondPopupVisible: false,
    thirdPopupVisible: false,
    // fourthPopupVisible: false,
  });

  const popupMutation = useMutation({
    mutationKey: ["popup"],
    mutationFn: async ({ name, email, phone }) => {
      const req = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/popup-generate`,
        {
          name,
          email,
          phone,
        },
      );
      return req.data;
    },
    onSuccess: () => {
      toast.success("Coupon Generated!");
    },
    onError: () => {
      toast.error("Coupon already generated on email!");
    },
  });

  const resetPopupState = () => {
    setPopupState({
      firstPopupVisible: false,
      secondPopupVisible: false,
      thirdPopupVisible: false,
      fourthPopupVisible: false,
    });
  };

  const value = {
    popupState,
    name,
    setName,
    resetPopupState,
    email,
    setEmail,
    setPopupState,
    popupMutation,
    phoneNumber,
    setPhoneNumber,
  };
  return (
    <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
  );
};
