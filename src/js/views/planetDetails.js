import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar.js";

import PlanetDetail from "../component/planetDetail.jsx";

export const DetailedPlanet = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <PlanetDetail />
    </div>
  );
};
