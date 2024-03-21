import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState();
  const [searchWord, setSearchWord] = useState("");

  const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

  const fetchAllBeers = async () => {
    const response = await fetch(`${API_URL}`);
    if (response.ok) {
      const allBeers = await response.json();
      setBeers(allBeers);
    }
  };

  const handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchWord(searchValue);

    const filtered = beers.filter((beer) => {
      return beer.name.toLowerCase().includes(searchValue);
    });
    setBeers(filtered);
  };

  useEffect(() => {
    fetchAllBeers();
  }, []);

  if (!beers) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <form>
        <label>
          Search
          <input type="text" value={searchWord} onChange={handleChange} />
          {beers.length === 0 ? (
            <h4>Oops! There is no more content to show.</h4>
          ) : (
            ""
          )}
        </label>
      </form>
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
