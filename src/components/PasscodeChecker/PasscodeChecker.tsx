import React, { useEffect } from "react";

import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";

const PasscodeChecker = () => {
  let navigate = useNavigate();
  const [passcode] = useLocalStorage<string | null>("secret", null);

  useEffect(() => {
    console.log("checker " + passcode);
    if (passcode !== "223") navigate("/");
  }, [passcode])

  // useEffect(() => {
  //   if (passcode !== "223") {
  //     let path = `/`;
  //     navigate(path);
  //     return;
  //   }
  // }, []);

  // return <div></div>;
  return null;
};

export default PasscodeChecker;
