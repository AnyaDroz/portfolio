import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";

const Passcode = () => {
  let navigate = useNavigate();

  const [number, setNumber] = useLocalStorage<string | null>("secret", null);

  useEffect(() => {
    if (number === "223") { 
      navigate("/home");
      return;
    }

    setNumber(window.prompt("Enter the passcode", ""));
  }, [number])

  // useEffect(() => {
  //   setTimeout(() => {
  //     let path = `/home`;
  //     navigate(path);
  //   }, 1000);
  //   if (number === "223") {
  //     navigate("/home");
  //   }
  //   if (number !== "223") {
  //     console.log("hi");
  //     const enteredNumber = window.prompt("Enter the passcode", "");
  //     setNumber(enteredNumber);
  //   } else {
  //     console.log("hi");
  //   }
  // }, []);

  return null;
};

export default Passcode;
