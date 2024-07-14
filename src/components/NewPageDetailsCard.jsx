import Border from "../components/Borders";
import BackButton from "./BackButton";

function NewPageDetailsCard({ country }) {
  const borders = country.borders ?? "Not Found...";

  return (
    <div className="details-country-container">
      <div>
        <BackButton />
      </div>

      <div className="details-container">
        <img src={country.flags.svg} />

        <div className="details-container__info">
          <h2>{country.name.common}</h2>
          <div className="info-container">
            <div className="info-left">
              <p>
                Native Name:{" "}
                <span>
                  {Object.values(country.name.nativeName)?.[0]?.common ??
                    "Not Found..."}
                </span>
              </p>
              <p>
                Population:
                <span> {country.population.toLocaleString("en-US")}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>
            <div className="info-right">
              <p>
                Top Level Domain:{" "}
                <span>{country.tld?.[0] ?? "Not Found..."}</span>
              </p>
              <p>
                Currencies:
                <span>
                  {" "}
                  {Object.values(country.currencies)?.[0]?.name ??
                    "Not Found..."}
                </span>
              </p>
              <p>
                Languages:{" "}
                <span>
                  {Object.values(country.languages)?.join(", ") ??
                    "Not Found..."}
                </span>
              </p>
            </div>
          </div>
          <div className="border-container">
            <span>Border Countries: </span>
            <div>
              {typeof borders === "string" ? (
                <div className="not-found">Not Found...</div>
              ) : (
                borders.map((border, i) => <Border border={border} key={i} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPageDetailsCard;
