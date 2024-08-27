import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar.js";

import VehicleDetail from "../component/vehiclesDetail.jsx";

export const DetailedVehicle = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <VehicleDetail />
    </div>
  );
};
