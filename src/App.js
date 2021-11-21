import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const url = process.env.REACT_APP_URL;

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`${url}`).then((res) => {
      setCharacters(res.data.data.results);
    });
  }, []);

  return (
    <div className="App">
      {characters.map((character) => (
        <div className="card" key={character.id}>
          <h1>{character.title}</h1>
          <h2>{character.modified}</h2>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.title}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
