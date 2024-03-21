import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

  const fetchBeersBySearch = async (query) => {
    try {
      const response = await fetch(`${API_URL}/search?q=${query}`);
      if (response.ok) {
        const filteredBeers = await response.json();
        setBeers(filteredBeers);
      } else {
        console.error("Failed to fetch beers by search");
      }
    } catch (error) {
      console.error("Error fetching beers by search:", error);
    }
  };

  const handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchWord(searchValue);
    fetchBeersBySearch(searchValue);
  };

  useEffect(() => {
    fetchBeersBySearch("");
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
      {beers.map((beer) => (
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
      ))}
    </div>
  );
}

export default AllBeersPage;
