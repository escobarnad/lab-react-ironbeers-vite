import { useParams } from "react-router-dom";
import BeerDetails from "../components/BeerDetails";

function BeerDetailsPage() {
  const { beerId } = useParams();
  return <BeerDetails beerId={beerId} />;
}

export default BeerDetailsPage;
