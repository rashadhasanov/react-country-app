import React, { useState, useCallback } from "react";

function RegionOptions({ handleCountry, toggleOptions, setRegion }) {
  const [activeButton, setActiveButton] = useState("europe");

  function handleClick(region) {
    handleCountry(region);
    setActiveButton(region);
    toggleOptions();
    setRegion(region[0].toUpperCase() + region.slice(1));
  }

  return (
    <div className="options">
      <button
        className={activeButton === "africa" ? "active" : ""}
        onClick={() => handleClick("africa")}
      >
        Africa
      </button>
      <button
        className={activeButton === "america" ? "active" : ""}
        onClick={() => handleClick("america")}
      >
        America
      </button>
      <button onClick={() => handleClick("asia")}>Asia</button>
      <button
        className={activeButton === "europe" ? "active" : ""}
        onClick={() => handleClick("europe")}
      >
        Europe
      </button>
      <button
        className={activeButton === "oceania" ? "active" : ""}
        onClick={() => handleClick("oceania")}
      >
        Oceania
      </button>
    </div>
  );
}

export default RegionOptions;
