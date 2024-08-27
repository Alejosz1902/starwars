import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getVehicles();
  }, []);

  return (
    <div className="container">
      <h1 className="text-danger text-start mx-2 my-4">Vehicles</h1>
      <div className="d-flex flex-row overflow-auto">
        {store.vehiclesUids.map((uid) => (
          <div key={uid} className="card mx-2" style={{ minWidth: "400px" }}>
            <img
              src={
                "https://starwars-visualguide.com/assets/img/vehicles/" +
                uid +
                ".jpg"
              }
              className="card-img-top"
              alt="Vehicle Image"
            />
            <div className="card-body">
              <h5 className="card-title">{store.vehiclesDetails[uid]?.name}</h5>
              <p className="card-text">
                Model: {store.vehiclesDetails[uid]?.model}
              </p>
              <p className="card-text">
                Cost in credits: {store.vehiclesDetails[uid]?.cost_in_credits}
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Link to={`/vehicleDetails/${uid}`} className="btn btn-primary">
                Learn more!
              </Link>
              <button
                className="btn btn-outline-warning"
                onClick={() =>
                  actions.addFavorite(store.vehiclesDetails[uid]?.name)
                }
              >
                <i className="fa fa-heart"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
