import { useState } from "react";
import { Link } from 'react-router-dom';


let nextId = 0;
export default function ListClass5() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);
  return (
    <>
      <h1>Inspiring sculptors</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, {id: nextId++, name: name}])
        }}
      >
        Add
      </button>
      <ul>
        {artists.map(artist => (
            <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
      <div>
            <Link to="/">Voltar a home</Link>
      </div>
    </>
  );
}
