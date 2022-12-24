import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom";

const PasscodeChecker = () => {
  const [number, setNumber] = useLocalStorage<string | null>("secret", null);
  let navigate = useNavigate();
  const [passcode] = useLocalStorage<string | null>(null);
  // if (passcode !== "666") {
  //   let path = `/`;
  //   navigate(path);
  //   return null;
  // }

  return <div></div>;
};

export default PasscodeChecker;
