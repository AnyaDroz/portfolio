
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import Buyerupgrades from './pages/Buyerupgrades/Buyerupgrades';


function App() {
  const location = useLocation();
  return (
    <div>

        <Routes>
          <Route path="/" index element={<Homepage/>} />
          <Route path="/info" index element={""} />
          <Route path="/code" index element={""} />
          <Route path="/Buyerupgrades" index element={<Buyerupgrades/>} />
      
        </Routes>

  

    </div>
  );
}

export default App;
