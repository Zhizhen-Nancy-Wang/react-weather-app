import React from "react";
import search from "../images/search.png";

export const SearchBar = () => {
  return (
    <div>
      <div className="container">
        <form
          action="javascript:void(0)"
          onSubmit="handleOnSubmit(this)"
          id="search-form"
          className="row"
        >
          <div className="mt-1 col-10">
            <input
              className="form-control me-2 search-bar"
              type="text"
              placeholder="Search for a city"
              aria-label="Search"
              id="city-input"
              name="cityInput"
            />
          </div>

          <div className="mt-1 col-2">
            <button className="btn btn-outline-light" type="submit">
              <img src={search} width="15px" alt="search" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
