<<<<<<< HEAD
import Homepage from './pages/Homepage/Homepage';
import Buyerupgrades from './pages/Buyerupgrades/Buyerupgrades';
=======
import Homepage from './components/Homepage/Homepage';
>>>>>>> 44195a465c608b3fb80be173705580154ff6e926
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  return (
    <div>
<<<<<<< HEAD
        <Routes>
          <Route path="/" index element={<Homepage/>} />
          <Route path="/info" index element={""} />
          <Route path="/code" index element={""} />
          <Route path="/Buyerupgrades" index element={<Buyerupgrades/>} />
      
        </Routes>
=======
      <Homepage/>
>>>>>>> 44195a465c608b3fb80be173705580154ff6e926
    </div>
  );
}

export default App;
