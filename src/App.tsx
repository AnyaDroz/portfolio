import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Buyerupgrades from "./pages/Buyerupgrades/Buyerupgrades";
import Multitransactions from "./pages/Multi-transactions/Multi-transactions";
import InstantAccess from "./pages/InstantAccess/InstantAccess";
import ModularPricing from "./pages/ModularPricing/ModularPricing";
import Quotes from "./pages/Quotes/Quotes";
import Hydra from "./pages/Hydra/Hydra";

function App() {
  const location = useLocation();
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Homepage />} />

        <Route path="/Buyerupgrades" index element={<Buyerupgrades />} />
        <Route
          path="/Multitransactions"
          index
          element={<Multitransactions />}
        />
        <Route path="/Instantaccess" index element={<InstantAccess />} />
        <Route path="/Modularpricing" index element={<ModularPricing />} />
        <Route path="/Quotes" index element={<Quotes />} />
        <Route path="Hydra" index element={<Hydra />} />
      </Routes>
    </div>
  );
}

export default App;
