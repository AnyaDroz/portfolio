import React, { useEffect, useRef } from "react";
import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";

const Passcode = () => {
  const [number, setNumber] = useLocalStorage<string | null>("secret", null);
  let navigate = useNavigate();
  const passwordEnteredRef = useRef(false);

  useEffect(() => {
    if (number==="1992") {return}
    if (number !== "1992") {
     console.log("hi")
    const enteredNumber = window.prompt("Enter the passcode", "");
    setNumber(enteredNumber);
    } else {
      console.log("hi")
      passwordEnteredRef.current = true;
      navigate("/home");
      
    }
  }, []);
  

  return <div></div>;
};

export default Passcode;
