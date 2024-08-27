import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Characters = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCharacters();
  }, []);

  return (
    <div className="container">
      <h1 className="text-danger text-start mx-2 my-4">Characters</h1>
      <div className="d-flex flex-row overflow-auto">
        {store.characterUids.map((uid) => (
          <div key={uid} className="card mx-2" style={{ minWidth: "400px" }}>
            <div className="card">
              <img
                src={
                  "https://starwars-visualguide.com/assets/img/characters/" +
                  uid +
                  ".jpg"
                }
                className="card-img-top"
                alt="Character Image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {store.characterDetails[uid]?.name}
                </h5>
                <p className="card-text">
                  Gender: {store.characterDetails[uid]?.gender}
                </p>
                <p className="card-text">
                  Hair Color: {store.characterDetails[uid]?.hair_color}
                </p>
                <p className="card-text">
                  Eye-Color: {store.characterDetails[uid]?.eye_color}
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <Link to={`/details/${uid}`} className="btn btn-primary">
                  Learn more!
                </Link>
                <button
                  className="btn btn-outline-warning"
                  onClick={() =>
                    actions.addFavorite(store.characterDetails[uid]?.name)
                  }
                >
                  <i className="fa fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
