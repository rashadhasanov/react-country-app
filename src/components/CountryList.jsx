import CountryCard from "./CountryCard";
import SearchContainer from "./SearchContainer";
import FilterContainer from "./FilterContainer";

function CountryList({ data, handleCountry, filteredCountry }) {
  return (
    <main>
      <div className="main-container">
        <div className="input-container">
          <SearchContainer filteredCountry={filteredCountry} />
          <FilterContainer handleCountry={handleCountry} />
        </div>

        <div className="countries-container">
          {data.map((country) => (
            <CountryCard key={country.cca2} country={country} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default CountryList;
