const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      characterUids: [],
      characterDetails: {},
      planetsUids: [],
      planetsDetails: {},
      vehiclesUids: [],
      vehiclesDetails: {},
    },
    actions: {
      addFavorite: (name) => {
        const store = getStore();
        if (!store.favorites.includes(name)) {
          setStore({ favorites: [...store.favorites, name] });
        }
      },

      removeFavorite: (name) => {
        const store = getStore();
        setStore({ favorites: store.favorites.filter((fav) => fav !== name) });
      },

      setCharacterUids: (uids) => {
        setStore({ characterUids: uids });
      },
      setCharacterDetails: (uid, details) => {
        const store = getStore();
        setStore({
          characterDetails: { ...store.characterDetails, [uid]: details },
        });
      },
      getCharacters: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          const uids = data.results.map((character) => character.uid);
          getActions().setCharacterUids(uids);

          const store = getStore();
          const requests = uids
            .filter((uid) => !store.characterDetails[uid]) // Excluye los que ya están cacheados
            .map((uid) => getActions().getCharacterDetails(uid));

          // Usamos `Promise.all` para esperar a que todos los detalles de los personajes se obtengan.
          await Promise.all(requests);
        } catch (error) {
          console.error("Failed to fetch characters:", error);
        }
      },
      getCharacterDetails: async (uid) => {
        const store = getStore();
        if (!store.characterDetails[uid]) {
          // Solo hace la solicitud si los detalles no están en el store
          try {
            const response = await fetch(
              `https://www.swapi.tech/api/people/${uid}`
            );
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            getActions().setCharacterDetails(uid, data.result.properties);
          } catch (error) {
            console.error(
              `Failed to fetch details for character ${uid}:`,
              error
            );
          }
        }
      },
      setPlanetsUids: (uids) => {
        setStore({ planetsUids: uids });
      },
      setPlanetsDetails: (uid, details) => {
        const store = getStore();
        setStore({
          planetsDetails: { ...store.planetsDetails, [uid]: details },
        });
      },
      getPlanets: async () => {
        try {
          const response = await fetch("https://swapi.tech/api/planets/");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          const uids = data.results.map((planets) => planets.uid);
          getActions().setPlanetsUids(uids);

          const store = getStore();
          const requests = uids
            .filter((uid) => !store.planetsDetails[uid]) // Excluye los que ya están cacheados
            .map((uid) => getActions().getPlanetsDetails(uid));

          // Usamos `Promise.all` para esperar a que todos los detalles de los personajes se obtengan.
          await Promise.all(requests);
        } catch (error) {
          console.error("Failed to fetch planets:", error);
        }
      },
      getPlanetsDetails: async (uid) => {
        const store = getStore();
        if (!store.planetsDetails[uid]) {
          // Solo hace la solicitud si los detalles no están en el store
          try {
            const response = await fetch(
              `https://www.swapi.tech/api/planets/${uid}`
            );
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            getActions().setPlanetsDetails(uid, data.result.properties);
          } catch (error) {
            console.error(`Failed to fetch details for planet ${uid}:`, error);
          }
        }
      },
      setVehiclesUids: (uids) => {
        setStore({ vehiclesUids: uids });
      },
      setVehiclesDetails: (uid, details) => {
        const store = getStore();
        setStore({
          vehiclesDetails: { ...store.vehiclesDetails, [uid]: details },
        });
      },
      getVehicles: async () => {
        try {
          const response = await fetch("https://swapi.tech/api/vehicles/");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          const uids = data.results.map((vehicles) => vehicles.uid);
          getActions().setVehiclesUids(uids);

          const store = getStore();
          const requests = uids
            .filter((uid) => !store.vehiclesDetails[uid]) // Excluye los que ya están cacheados
            .map((uid) => getActions().getVehiclesDetails(uid));

          // Usamos `Promise.all` para esperar a que todos los detalles de los personajes se obtengan.
          await Promise.all(requests);
        } catch (error) {
          console.error("Failed to fetch vehicles:", error);
        }
      },
      getVehiclesDetails: async (uid) => {
        const store = getStore();
        if (!store.vehiclesDetails[uid]) {
          // Solo hace la solicitud si los detalles no están en el store
          try {
            const response = await fetch(
              `https://www.swapi.tech/api/vehicles/${uid}`
            );
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            getActions().setVehiclesDetails(uid, data.result.properties);
          } catch (error) {
            console.error(`Failed to fetch details for vehicle ${uid}:`, error);
          }
        }
      },
    },
  };
};

export default getState;
