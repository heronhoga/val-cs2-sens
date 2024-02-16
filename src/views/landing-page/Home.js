import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="containerHome">
      <div className="leftHome">
        <h1 className="titleHome">Sensitivity converter by: hg</h1>
        <Link to="/cs2-to-val">
          <button className="csToValBtn">
            Convert CS2 Sensitivity to Valorant
          </button>
        </Link>
      </div>
      <div className="rightHome">
        <h1 className="titleHome">Sensitivity converter by: hg</h1>
        <Link to="/val-to-cs2">
          <button className="valToCsBtn">
            Convert Valorant Sensitivity to CS2
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
