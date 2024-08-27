import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const { store, actions } = useContext(Context);
  const { uid } = useParams();

  useEffect(() => {
    if (!store.characterDetails[uid]) {
      actions.getCharacterDetails(uid);
    }
  }, [uid]);

  const character = store.characterDetails[uid];

  return (
    <div className="container mt-5">
      {character ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={
                "https://starwars-visualguide.com/assets/img/characters/" +
                uid +
                ".jpg"
              }
              className="img-fluid"
              alt={character.name}
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-danger">{character.name}</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <hr />
            <table className="table">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{character.name}</td>
                </tr>
                <tr>
                  <th>Birth Year</th>
                  <td>{character.birth_year}</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>{character.gender}</td>
                </tr>
                <tr>
                  <th>Height</th>
                  <td>{character.height}</td>
                </tr>
                <tr>
                  <th>Skin Color</th>
                  <td>{character.skin_color}</td>
                </tr>
                <tr>
                  <th>Eye Color</th>
                  <td>{character.eye_color}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>Loading character details...</p>
      )}
    </div>
  );
};

export default CharacterDetail;
