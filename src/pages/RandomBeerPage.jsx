import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
function RandomBeersPage() {
    const [beer, setBeer] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const fetchARandomBeer = async () => {
        const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
        console.log(response)
        if (response.ok) {
            const parsed = await response.json()
            console.log(parsed)
            setBeer(parsed)
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchARandomBeer()
    }, [])

    return (
        <>
            <img src={beer.image_url} style={{ height: "200px" }} />
            <h1>Name: {beer.name}</h1>
            <p>Tagline: {beer.tagline}</p>
            <p>First brewed in: {beer.first_brewed}</p>
            <p>Attenuation level: {beer.attenuation_level}</p>
            <p>Description: {beer.description}</p>
            <p>Contributed by: {beer.contributed_by}</p>
        </>

    )
}

export default RandomBeersPage;
