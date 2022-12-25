import React from "react";
import { useRef } from "react";
import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";

const PasscodeChecker = () => {
  
  console.log("checker")
  let navigate = useNavigate();
  const [passcode] = useLocalStorage<string | null>("secret", null);
  const passwordEnteredRef = useRef(false);

  if (passcode !== "1992"){
    let path = `/`;
    navigate(path);
    return null; 
  } 

  return <div></div>;
}

export default PasscodeChecker;
