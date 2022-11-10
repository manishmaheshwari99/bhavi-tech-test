import axios from "axios";
import {
  FETCH_CHARACTER_FAILURE,
  FETCH_CHARACTER_REQUEST,
  FETCH_CHARACTER_SUCCESS,
} from "./characterActionTypes";

const BASE_URL = "https://swapi.dev/api/";

export const fetchCharacterRequest = () => {
  return {
    type: FETCH_CHARACTER_REQUEST,
  };
};
export const fetchCharacterSuccess = (character) => {
  return {
    type: FETCH_CHARACTER_SUCCESS,
    payload: character,
  };
};

export const fetchCharacterFailure = (error) => {
  return {
    type: FETCH_CHARACTER_FAILURE,
    payload: error,
  };
};

export const fetchCharacters = () => {
  return (dispatch) => {
    dispatch(fetchCharacterRequest());
    try {
      axios
        .get(`${BASE_URL}people`)
        .then((response) => {
          const users = response.data.results;
          dispatch(fetchCharacterSuccess(users));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchCharacterFailure(errorMsg));
        });
    } catch (err) {
      console.log(err);
    }
  };
};
