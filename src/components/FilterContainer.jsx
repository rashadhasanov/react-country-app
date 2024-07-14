import RegionOptions from "./RegionOptions";
import React, { useState } from "react";

function FilterContainer({ handleCountry }) {
  const [showOptions, setShowOptions] = useState(false);
  const [region, setRegion] = useState("Filter by Region");

  function toggleOptions() {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  }

  return (
    <div className="filter-container">
      <div className="select">
        <span>{region}</span>
        <button className="open-option-btn" onClick={toggleOptions}>
          <i className="material-icons">
            {showOptions ? "keyboard_arrow_up" : "keyboard_arrow_down"}
          </i>
        </button>
      </div>
      <div className={`${showOptions ? "" : "hidden"}`}>
        <RegionOptions
          handleCountry={handleCountry}
          toggleOptions={toggleOptions}
          setRegion={setRegion}
        />
      </div>
    </div>
  );
}

export default FilterContainer;
