import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";


const Passcode = () => {
  const [number, setNumber] = useLocalStorage<string | null>("secret", null);
  let navigate = useNavigate();

  useEffect(() => {
    if (number !== "1998") {
      const enteredNumber = window.prompt("Enter the passcode", "");
      setNumber(enteredNumber);
    
    } else {
      window.prompt("Enter the passcode", "");
      navigate("/home");
      
    }
  }, []);
  //stupid strict mode runs twice had to delete it
  //also wouldn't let me navigate to home. 

  return <div></div>;
};

export default Passcode;
