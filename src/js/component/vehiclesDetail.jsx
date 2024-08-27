import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const VehicleDetail = () => {
  const { store, actions } = useContext(Context);
  const { uid } = useParams();

  useEffect(() => {
    if (!store.vehiclesDetails[uid]) {
      actions.getVehiclesDetails(uid);
    }
  }, [uid]);

  const vehicle = store.vehiclesDetails[uid];

  return (
    <div className="container mt-5">
      {vehicle ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={
                "https://starwars-visualguide.com/assets/img/vehicles/" +
                uid +
                ".jpg"
              }
              className="img-fluid"
              alt={vehicle.name}
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-danger">{vehicle.name}</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <hr />
            <table className="table">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{vehicle.name}</td>
                </tr>
                <tr>
                  <th>Model</th>
                  <td>{vehicle.model}</td>
                </tr>
                <tr>
                  <th>Cost</th>
                  <td>{vehicle.cost_in_credits}</td>
                </tr>
                <tr>
                  <th>Capacity</th>
                  <td>{vehicle.cargo_capacity}</td>
                </tr>
                <tr>
                  <th>Passengers</th>
                  <td>{vehicle.passengers}</td>
                </tr>
                <tr>
                  <th>Crew</th>
                  <td>{vehicle.crew}</td>
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

export default VehicleDetail;
