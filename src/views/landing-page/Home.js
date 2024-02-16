import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="containerHome">
      <div className="leftHome"><Link to="/cs2-to-val"><button className='csToValBtn'>Convert CS2 Sensitivity to Valorant</button></Link></div>
      <div className="rightHome"><Link to="/val-to-cs2"><button className='valToCsBtn'>Convert Valorant Sensitivity to CS2</button></Link></div>
    </div>
  );
}

export default Home;
