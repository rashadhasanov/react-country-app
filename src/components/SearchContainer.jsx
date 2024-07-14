function SearchContainer({ filteredCountry }) {
  return (
    <div className="search-container">
      <button className="search-btn">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <input
        onChange={(e) => filteredCountry(e.target.value)}
        type="text"
        className="search-input"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchContainer;
