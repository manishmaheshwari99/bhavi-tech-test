import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarWarList from "../components/StarWarList";
import { fetchCharacters } from "../redux";

const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
    console.log(state);
  }, []);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        Star Wars List
      </nav>
      {state.loading && <h1>Loading...</h1>}
      <StarWarList startWars={state.characters} />
    </div>
  );
};

export default Home;
