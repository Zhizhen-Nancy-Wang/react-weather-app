import React from "react";
import celsius from "../images/celsius.png";
import farenheit from "../images/farenheit.png";

export const CFbtns = () => {
  return (
    <div
      className="d-flex ms-auto mt-2"
      //   style={{paddingRight: 1rem }}
    >
      <div className="container">
        <div className="degree">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" id="C-btn" className="btn btn-outline-light">
              <img src={celsius} width="20px" alt="celsius" />
            </button>

            <button type="button" id="F-btn" className="btn btn-outline-light">
              <img src={farenheit} width="20px" alt="fahrenheit" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
