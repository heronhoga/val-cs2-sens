import { Route, Routes } from "react-router-dom";
import Home from "./views/landing-page/Home";
import CsVal from "./views/cs2-to-val/CsVal"

function App() {
  return <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cs2-to-val" element={<CsVal />} />
    </Routes>
  </div>;
}

export default App;
