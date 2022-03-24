import React from "react";
import rain from "../images/rain.png";

export const Bottom = () => {
  return (
    <div>
      <div className="bottom-part">
        <div className="container" id="forecast">
          <div className="row bottom-row">
            <div className="col bottom-detail">
              <div className="forecast-daily mt-1">
                <div className="btm-dates">Tue</div>
                <img
                  src={rain}
                  className="mb-2"
                  width="35px"
                  alt="
                  weather-img"
                />
                <div className="highest">24°C</div>
                <div className="lowest" id="lowest">
                  20°C
                </div>
              </div>
            </div>

            <div className="col bottom-detail">
              <div className="forecast-daily mt-1">
                <div className="btm-dates">Wed</div>
                <img
                  src={rain}
                  className="mb-2"
                  width="35px"
                  alt="weather-img"
                />
                <div className="highest">24°C</div>
                <div className="lowest">20°C</div>
              </div>
            </div>

            <div className="col bottom-detail">
              <div className="forecast-daily mt-1">
                <div className="btm-dates">Thur</div>
                <img
                  src={rain}
                  className="mb-2"
                  width="35px"
                  alt="weather-img"
                />
                <div className="highest">24°C</div>
                <div className="lowest">20°C</div>
              </div>
            </div>

            <div className="col bottom-detail">
              <div className="forecast-daily mt-1">
                <div className="btm-dates">Fri</div>
                <img
                  src={rain}
                  className="mb-2"
                  width="35px"
                  alt="weather-img"
                />
                <div className="highest">24°C</div>
                <div className="lowest">20°C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
