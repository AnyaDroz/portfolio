import React, { useEffect } from "react";

import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";

const PasscodeChecker = () => {

  let navigate = useNavigate();
  const [passcode] = useLocalStorage<string | null>("secret", null);

  useEffect(() => {
    
    if (passcode !== "223"){
      let path = `/`;
      navigate(path);
      return; 
    } 
  }, []);
  

  return <div></div>;
}

export default PasscodeChecker;
