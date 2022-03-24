import React from "react";

export const CFbtns = () => {
  return (
    <div
      className="d-flex justify-content-end col-6 mt-2"
      //   style={{paddingRight: 1rem }}
    >
      <div className="degree">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" id="C-btn" className="btn btn-outline-light">
            <img src="images/celsius.png" width="20px" alt="celsius" />
          </button>

          <button type="button" id="F-btn" className="btn btn-outline-light">
            <img src="images/farenheit.png" width="20px" alt="fahrenheit" />
          </button>
        </div>
      </div>
    </div>
  );
};
