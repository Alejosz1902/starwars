import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const PlanetDetail = () => {
  const { store, actions } = useContext(Context);
  const { uid } = useParams();

  useEffect(() => {
    if (!store.planetsDetails[uid]) {
      actions.getPlanetsDetails(uid);
    }
  }, [uid]);

  const planet = store.planetsDetails[uid];

  return (
    <div className="container mt-5">
      {planet ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={
                "https://starwars-visualguide.com/assets/img/planets/" +
                uid +
                ".jpg"
              }
              className="img-fluid"
              alt={planet.name}
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-danger">{planet.name}</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <hr />
            <table className="table">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{planet.name}</td>
                </tr>
                <tr>
                  <th>Population</th>
                  <td>{planet.population}</td>
                </tr>
                <tr>
                  <th>Gravity</th>
                  <td>{planet.gravity}</td>
                </tr>
                <tr>
                  <th>Climate</th>
                  <td>{planet.climate}</td>
                </tr>
                <tr>
                  <th>Terrain</th>
                  <td>{planet.terrain}</td>
                </tr>
                <tr>
                  <th>Orbital Period</th>
                  <td>{planet.orbital_period}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>Loading planet details...</p>
      )}
    </div>
  );
};

export default PlanetDetail;
