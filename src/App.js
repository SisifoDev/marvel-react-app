import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Card } from "./components/Card";

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
        <Card
          key={character.id}
          title={character.title}
          date={character.modified}
          img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        />
      ))}
    </div>
  );
}

export default App;
