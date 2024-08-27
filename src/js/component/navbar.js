import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3 container-xxl">
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rK9hrcxI7HjqqbCemnwsc1nlvxXXf3uZlFa5Y1THOpHWcKfN"
          style={{ maxHeight: "100px" }}
          alt="Logo"
        />
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="favoritesDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites ({store.favorites.length})
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="favoritesDropdown"
          >
            {store.favorites.length > 0 ? (
              store.favorites.map((fav, index) => (
                <li
                  key={index}
                  className="dropdown-item d-flex justify-content-between align-items-center mx-2"
                >
                  {fav}
                  <button
                    className="btn btn-outline-danger btn-sm mx-2"
                    onClick={() => actions.removeFavorite(fav)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </li>
              ))
            ) : (
              <li className="dropdown-item">No favorites added</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
