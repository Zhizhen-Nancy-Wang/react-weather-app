import React from "react";
import rain from "../images/rain.png";

export const WeatherImgFeelsLike = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4" />

        <div className="col-4" id="current-img">
          <img
            src={rain}
            className="img-fluid crt-img"
            alt="weather-img"
            id="crt-img"
          />
        </div>

        <div className="col-4 float-feelslike">
          <div className="container feels">
            <div className="feelslike-info">FEELS LIKE</div>
            <div className="num-feelslike fs-5" id="num-feelslike">
              25 °
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
