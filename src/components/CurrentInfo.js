import React from "react";

export const CurrentInfo = () => {
  return (
    <div className="current-info">
      <span>
        <div className="current-location text-capitalize" id="input-location">
          Sydney
        </div>
        <span className="current-date" id="crt-day">
          {" "}
          Mon{" "}
        </span>

        <span className="current-time" id="crt-time">
          10:00{" "}
        </span>
        <div className="current-weather fs-5" id="crt-weather-des">
          Cloudy
        </div>
      </span>
    </div>
  );
};
