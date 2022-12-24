import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Buyerupgrades from "./pages/Buyerupgrades/Buyerupgrades";
import Multitransactions from "./pages/Multi-transactions/Multi-transactions";
import InstantAccess from "./pages/InstantAccess/InstantAccess";
import ModularPricing from "./pages/ModularPricing/ModularPricing";
import Quotes from "./pages/Quotes/Quotes";
import Hydra from "./pages/Hydra/Hydra";
import Passcode from "./pages/Passcode/Passcode";

function App() {
  const location = useLocation();
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Passcode />} />
        <Route path="/home" index element={<Homepage />} />
        <Route path="/buyer-upgrades" index element={<Buyerupgrades />} />
        <Route
          path="/multi-transactions"
          index
          element={<Multitransactions />}
        />
        <Route path="/instant-access" index element={<InstantAccess />} />
        <Route path="/modular-pricing" index element={<ModularPricing />} />
        <Route path="/quotes" index element={<Quotes />} />
        <Route path="hydra" index element={<Hydra />} />
      </Routes>
    </div>
  );
}

export default App;
