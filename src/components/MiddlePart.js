import React from "react";
import umbrella from "../images/umbrella.png";
import uv from "../images/uv.png";
import wind from "../images/wind.png";
import water from "../images/water.png";

export const MiddlePart = () => {
  return (
    <div>
      <div class="wrapper">
        <div class="container middle-part">
          <div class="container">
            <div class="container">
              <div class="row first-row">
                <div class="col-6 block">
                  <div class="row">
                    <div class="col-4 mt-2">
                      <img
                        src={umbrella}
                        class="detail-img"
                        width="35px"
                        alt="rainfall"
                      />
                    </div>
                    <div class="col-8 detail-info">
                      <div class="rainfall-info fs-5" id="rainfall-info">
                        75%
                      </div>
                      <div class="rainfall fs-6" id="rainfall">
                        RAINFALL
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-6 block">
                  <div class="row">
                    <div class="col-4 mt-2">
                      <img
                        src={wind}
                        class="detail-img"
                        width="35px"
                        alt="wind"
                      />
                    </div>
                    <div class="col-8 detail-info">
                      <div class="wind-info fs-5" id="wind-info">
                        16km/h
                      </div>
                      <div class="wind fs-6">WIND</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row second-row">
                <div class="col-6 block">
                  <div class="row">
                    <div class="col-4 mt-2">
                      <img src={uv} class="detail-img" width="35px" alt="uv" />
                    </div>
                    <div class="col-8 detail-info">
                      <div class="uv-info fs-5" id="uv-info">
                        10/ 11
                      </div>
                      <div class="uv fs-6">UV INDEX</div>
                    </div>
                  </div>
                </div>

                <div class="col-6 block">
                  <div class="row">
                    <div class="col-4 mt-2">
                      <img
                        src={water}
                        class="detail-img"
                        width="35px"
                        alt="sprout"
                      />
                    </div>
                    <div class="col-8 detail-info">
                      <div class="humidity-info fs-5" id="humidity">
                        0
                      </div>
                      <div class="humidity fs-6">HUMIDITY</div>
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
