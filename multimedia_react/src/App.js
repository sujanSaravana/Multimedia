import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Landingpage from './pages/landingpage';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Impress from './pages/impress';
import Kontakt from './pages/kontakt';
import Uebermich from './pages/ueber_mich';
import Angebote from './pages/angebote';
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";
import Product3 from "./pages/Product3";


function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes>
      <Route path="/" element={<Navigate to="/Landingpage" />} />
        <Route path="/Landingpage" element={<Landingpage />} />
        <Route path="/Angebote" element={<Angebote />} />
        <Route path="/Uebermich" element={<Uebermich />} />
        <Route path="/Impress" element={<Impress />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/Product1" element={<Product1 />} />
        <Route path="/Product2" element={<Product2 />} />
        <Route path="/Product3" element={<Product3 />} />
      </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
