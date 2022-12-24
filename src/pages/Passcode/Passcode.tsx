import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";

// npm install use-local-storage

const Passcode = () => {
  const [number, setNumber] = useLocalStorage<string | null>("secret", null);
  let navigate = useNavigate();

  useEffect(() => {
    if (number !== "666") {
      const enteredNumber = window.prompt("Type a number", "");
      setNumber(enteredNumber);
      console.log(enteredNumber);
    } else {
      console.log("password was already entered");

      let path = `/Home`;
      navigate(path);
    }
  }, []);

  return <div></div>;
};

export default Passcode;
