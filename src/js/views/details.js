import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar.js";

import CharacterDetail from "../component/characterDetail.jsx";

export const Details = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <CharacterDetail />
    </div>
  );
};
