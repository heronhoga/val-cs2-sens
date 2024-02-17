import { Route, Routes } from "react-router-dom";
import Home from "./views/landing-page/Home";
import CsVal from "./views/cs2-to-val/CsVal"
import ValCs from "./views/val-to-cs2/ValCs"

function App() {
  return <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cs2-to-val" element={<CsVal />} />
      <Route path="/val-to-cs2" element={<ValCs />} />
    </Routes>
  </div>;
}

export default App;
