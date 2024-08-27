import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Characters from "../component/characters.jsx";
import Vehicles from "../component/vehicles.jsx";
import Planets from "../component/planets.jsx";

export const Home = () => (
  <div className="text-center mt-5">
    <div className="my-5">
      <Characters />
    </div>
    <div className="my-5">
      <Planets />
    </div>
    <div className="my-5">
      <Vehicles />
    </div>
  </div>
);
