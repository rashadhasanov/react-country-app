import { useNavigate } from "react-router-dom";

function CountryCard({ country }) {
  const navigate = useNavigate();

  return (
    <div
      className="card-container"
      onClick={() =>
        navigate("details/" + country.name.common.replaceAll(" ", "-"))
      }
    >
      <div className="img-container">
        <img src={country.flags.svg} alt="" />
      </div>
      <div className="country-info">
        <p className="country-name">{country.name.common}</p>
        <p className="population">
          Population: <span>{country.population.toLocaleString("en-US")}</span>
        </p>
        <p className="region">
          Region: <span>{country.region}</span>
        </p>
        <p className="capital">
          Capital: <span>{country.capital}</span>
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
