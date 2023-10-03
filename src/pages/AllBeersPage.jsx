import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
function AllBeersPage() {
    const [beers, setBeers] = useState([])
    const fetchAllBeers = async () => {
        const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers`)
        if (response.ok) {
            const allBeers = await response.json()
            setBeers(allBeers)
            console.log(allBeers)
        }
    }
    useEffect(() => {
        fetchAllBeers()
    }, [])

    return (
        <>
            {beers.map(beer => (
                <li key={beer._id}>
                    <Link to={`/beers/${beer._id}`} >
                        <img src={beer.image_url} style={{ height: "200px" }} />
                        <h1>{beer.name}</h1>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                    </Link>
                </li>
            ))}
        </>
    )
}

export default AllBeersPage;
