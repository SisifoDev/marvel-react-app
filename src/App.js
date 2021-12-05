import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Card } from "./components/Card";
import styled from "styled-components";

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
      <Title>Marvel Characters</Title>
      <CharactersContainer>
        {characters.map((character) => (
          <Card
            key={character.id}
            title={character.title}
            date={character.modified}
            img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        ))}
      </CharactersContainer>
    </div>
  );
}

const Title = styled.h1`
  font-size: 3rem;
`;

const CharactersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  gap: 20px;
  margin: 0 auto;
`;

export default App;
