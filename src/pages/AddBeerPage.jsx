import { useState } from "react";
function AddBeerPage() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedby, setContributedby] = useState("");







    const onSubmit = async event => {
        event.preventDefault()
        const payload = {
            name,
            tagline,
            description,
            firstBrewed,
            brewersTips,
            attenuationLevel,
            contributedby,
        }
        try {
            const response = await fetch(
                `https://ih-beers-api2.herokuapp.com/beers/new`,
                {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-type': 'application/json',
                    },
                }
            )
            console.log(response)
            if (response.ok) {
                const currentBeer = await response.json()
                console.log(currentBeer)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <label>
                    Name
                    <input type="text" name="name" onChange={event => setName(event.target.value)} value={name} />
                </label>
                <label>
                    Tagline
                    <input type="text" name="name" onChange={event => setTagline(event.target.value)} value={tagline} />
                </label>
                <label>
                    Description
                    <input type='text' name="description" onChange={event => setDescription(event.target.value)} value={description} />
                </label>
                <label>
                    First Brewed
                    <input type='text' name="first_brewed" onChange={event => setFirstBrewed(event.target.value)} value={firstBrewed} />
                </label>
                <label>
                    Brewer's Tips
                    <input type='text' name="brewers_tips" onChange={event => setBrewersTips(event.target.value)} value={brewersTips} />
                </label>
                <label>
                    Attenuation Level
                    <input type='number' name="attenuation_level" onChange={event => setAttenuationLevel(event.target.value)} value={attenuationLevel} />
                </label>
                <label>
                    Contributed by
                    <input type='text' name="contributed_by" onChange={event => setContributedby(event.target.value)} value={contributedby} />
                </label>
                <button type='submit'>Add Beer</button>
            </form>
        </>
    )
}

export default AddBeerPage;
