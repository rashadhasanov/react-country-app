import { useParams } from "react-router-dom";
import NewPageDetailsCard from "../components/NewPageDetailsCard";
import { useEffect, useState } from "react";

function BorderCountryDetails() {
  const [country, setCountry] = useState("");
  const { borderName } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${borderName}`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, [borderName]);

  if (!country) {
    return <div className="loading">Loading...</div>;
  }

  return <NewPageDetailsCard country={country[0]} />;
}

export default BorderCountryDetails;
