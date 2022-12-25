import React, { useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";



const Passcode = () => {
  const [number, setNumber] = useLocalStorage<string | null>("secret", null);
  let navigate = useNavigate();
  
  useEffect(() => {
    if (number==="223") {navigate("/home")};
    if (number !== "223") {
     console.log("hi")
    const enteredNumber = window.prompt("Enter the passcode", "");
    setNumber(enteredNumber);
    } else {
      console.log("hi")
      setTimeout(()=>{
        let path = `/home`;
        navigate(path);
      },1000)
      
    }
  }, []);
  
  
  

  return <div></div>;
};

export default Passcode;
