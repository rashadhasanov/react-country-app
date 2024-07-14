import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import CountryList from "./components/CountryList";
import CountryDetails from "./pages/CountryDetails";
import ScrollToTop from "./components/ScrollToTop";
import BorderCountryDetails from "./pages/BorderCountryDetails";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  function filteredCountry(value) {
    const filteredArray = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredCountries(filteredArray);
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/europe")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      });
  }, []);

  function handleCountry(region) {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      });
  }

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <CountryList
              data={filteredCountries}
              handleCountry={handleCountry}
              filteredCountry={filteredCountry}
            />
          }
        />
        <Route
          path="/details/:countryName"
          element={<CountryDetails countries={countries} />}
        />
        <Route
          path="/border/details/:borderName"
          element={<BorderCountryDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
