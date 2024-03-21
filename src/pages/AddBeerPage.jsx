import { useState } from "react";
import { parse, v4 as uuidv4 } from "uuid";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
      _id: uuidv4(),
    };

    try {
      const response = await fetch(`${API_URL}/new`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(response);
      if (response.ok) {
        const parsed = await response.json();
        setTimeout(() => {
          setName("");
          setTagline("");
          setDescription("");
          setFirst_brewed("");
          setBrewers_tips("");
          setAttenuation_level(0);
          setContributed_by("");
        }, 250);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          value={name}
          type="text"
          name="name"
          onChange={(event) => {
            console.log(event);
            setName(event.target.value);
          }}
        />
      </label>
      <br />
      <label>
        Tagline
        <input
          value={tagline}
          type="text"
          name="tagline"
          onChange={(event) => {
            console.log(event);
            setTagline(event.target.value);
          }}
        />
      </label>
      <br />
      <label>
        Description
        <textarea
          value={description}
          name="description"
          type="text"
          onChange={(event) => {
            console.log(event);
            setDescription(event.target.value);
          }}
        />
      </label>
      <br />
      <label>
        First Brewed
        <input
          value={first_brewed}
          name="first_brewed"
          type="text"
          onChange={(event) => setFirst_brewed(event.target.value)}
        />
      </label>
      <br />
      <label>
        Brewer's tips
        <input
          value={brewers_tips}
          name="brewers_tips"
          type="text"
          onChange={(event) => setBrewers_tips(event.target.value)}
        />
      </label>
      <br />
      <label>
        Attenuation Level
        <input
          value={attenuation_level}
          name="attenuation_level"
          type="number"
          onChange={(event) => setAttenuation_level(event.target.value)}
        />
      </label>
      <br />
      <label>
        Contributed By
        <input
          value={contributed_by}
          name="contributed_by"
          type="text"
          onChange={(event) => setContributed_by(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Beer</button>
    </form>
  );
}

export default AddBeerPage;
