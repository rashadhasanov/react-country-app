import { useParams } from "react-router-dom";
import NewPageDetailsCard from "../components/NewPageDetailsCard";

function CountryDetails({ countries }) {
  const { countryName } = useParams();

  const country = countries.find(
    (country) => country.name.common === countryName.replaceAll("-", " ")
  );

  if (!country) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <NewPageDetailsCard country={country} />
    </>
  );
}

export default CountryDetails;
