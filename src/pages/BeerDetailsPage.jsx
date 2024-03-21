import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const [beer, setBeer] = useState();
  const { beerId } = useParams();

  const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

  const fetchBeer = async () => {
    const response = await fetch(`${API_URL}/${beerId}`);
    if (response.ok) {
      const oneBeer = await response.json();
      setBeer(oneBeer);
    }
  };

  useEffect(() => {
    fetchBeer();
  }, []);

  if (!beer) {
    return <p>Loading...</p>;
  }
  console.log(beer);

  return (
    <div>
      <img
        src={beer.image_url}
        alt={`${beer.name} image`}
        style={{ height: "10rem" }}
      />
      <h2>{beer.name}</h2>
      <h3>{beer.tagline}</h3>
      <p>First brewed: {beer.first_brewed}</p>
      <p>Attenuation level: {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
