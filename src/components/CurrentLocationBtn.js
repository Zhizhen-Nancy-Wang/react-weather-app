import React from "react";

export const CurrentLocationBtn = () => {
  return (
    <div className="container">
      <div className="d-flex current-loc-btn mt-2">
        <button
          type="button"
          className="btn btn-outline-light"
          id="current-loc-btn"
        >
          current location
        </button>
      </div>
    </div>
  );
};
