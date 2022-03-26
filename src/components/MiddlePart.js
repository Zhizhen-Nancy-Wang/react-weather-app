import React from "react";
import umbrella from "../images/umbrella.png";
import uv from "../images/uv.png";
import wind from "../images/wind.png";
import water from "../images/water.png";

export const MiddlePart = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="container middle-part">
          <div className="container">
            <div className="container">
              <div className="row first-row">
                <div className="col-6 block">
                  <div className="row">
                    <div className="col-4 mt-2">
                      <img
                        src={umbrella}
                        className="detail-img img-fluid"
                        alt="rainfall"
                      />
                    </div>
                    <div className="col-8 detail-info">
                      <div className="rainfall-info fs-5" id="rainfall-info">
                        75%
                      </div>
                      <div className="rainfall fs-5" id="rainfall">
                        RAINFALL
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 block">
                  <div className="row">
                    <div className="col-4 mt-2 ">
                      <img
                        src={wind}
                        className="detail-img img-fluid"
                        alt="wind"
                      />
                    </div>
                    <div className="col-8 detail-info">
                      <div className="wind-info fs-5" id="wind-info">
                        16km/h
                      </div>
                      <div className="wind fs-5">WIND</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row second-row">
                <div className="col-6 block">
                  <div className="row">
                    <div className="col-4 mt-2">
                      <img src={uv} className="detail-img img-fluid" alt="uv" />
                    </div>
                    <div className="col-8 detail-info">
                      <div className="uv-info fs-5" id="uv-info">
                        10/ 11
                      </div>
                      <div className="uv fs-5">UV INDEX</div>
                    </div>
                  </div>
                </div>

                <div className="col-6 block">
                  <div className="row">
                    <div className="col-4 mt-2">
                      <img
                        src={water}
                        className="detail-img img-fluid"
                        alt="sprout"
                      />
                    </div>
                    <div className="col-8 detail-info">
                      <div className="humidity-info fs-5" id="humidity">
                        0 %
                      </div>
                      <div className="humidity fs-5">HUMIDITY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
