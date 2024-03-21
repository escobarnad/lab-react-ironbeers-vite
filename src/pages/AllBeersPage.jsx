import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState();

  const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

  const fetchAllBeers = async () => {
    const response = await fetch(`${API_URL}`);
    if (response.ok) {
      const allBeers = await response.json();
      setBeers(allBeers);
    }
  };

  useEffect(() => {
    fetchAllBeers();
  }, []);

  if (!beers) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {beers &&
        beers.map((beer) => {
          return (
            <Link to={`/beers/${beer._id}`} key={beer._id}>
              <img
                src={beer.image_url}
                alt={`${beer.name} image`}
                style={{ height: "10rem" }}
              />
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <p>{beer.contributed_by}</p>
            </Link>
          );
        })}
    </div>
  );
}

export default AllBeersPage;
