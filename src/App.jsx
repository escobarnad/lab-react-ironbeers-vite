import "./App.css";
import HomePage from "./pages/HomePage"
import AllBeersPage from "./pages/AllBeersPage"
import AddBeerPage from "./pages/AddBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React IronBeers</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<AllBeersPage />} />
        <Route path='/random-beer' element={<RandomBeerPage />} />
        <Route path='/new-beer' element={<AddBeerPage />} />
        <Route path='/beers/:beerId' element={<BeerDetailsPage />} />
        <Route path='*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
