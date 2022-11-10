import React from "react";
import "./index.css";

const StarWarList = ({ startWars }) => {
  return (
    <div className="d-flex flex-wrap">
      {startWars.length > 0 &&
        startWars.map((star, index) => {
          return (
            <div className="card m-2 p-2" key={index}>
              <h4>{star?.name}</h4>
              <p>{star?.birth_year}</p>
            </div>
          );
        })}
    </div>
  );
};

export default StarWarList;
