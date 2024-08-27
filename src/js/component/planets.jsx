import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Planets = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div className="container">
      <h1 className="text-danger text-start mx-2 my-4">Planets</h1>
      <div className="d-flex flex-row overflow-auto">
        {store.planetsUids.map((uid) => (
          <div key={uid} className="card mx-2" style={{ minWidth: "400px" }}>
            <img
              src={
                "https://starwars-visualguide.com/assets/img/planets/" +
                uid +
                ".jpg"
              }
              className="card-img-top"
              alt="Planet Image"
            />
            <div className="card-body">
              <h5 className="card-title">{store.planetsDetails[uid]?.name}</h5>
              <p className="card-text">
                Population: {store.planetsDetails[uid]?.population}
              </p>
              <p className="card-text">
                Terrain: {store.planetsDetails[uid]?.terrain}
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Link to={`/planetDetails/${uid}`} className="btn btn-primary">
                Learn more!
              </Link>
              <button
                className="btn btn-outline-warning"
                onClick={() =>
                  actions.addFavorite(store.planetsDetails[uid]?.name)
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

export default Planets;
