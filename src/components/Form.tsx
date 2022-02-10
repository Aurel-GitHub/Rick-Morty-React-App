import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICharacter } from "../interface";
import Card from "./Card";

const Form: React.FC = () => {
  // tableau de data conservé dans le state
  const [characters, setCharactersData] = useState([]);

  //useEffect joue une function une fois que le component est monté
  // [] est un calleback est comme il est vide il ne sera joué qu'une seule fois
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((res) => setCharactersData(res.data.results));
  }, []);
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le nom d'un perso"
            id="search-input"
          />
          <input type="submit" value="Rechercher" />
        </form>

        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            Top <span>➝</span>
          </div>
          <div className="btn-sort" id="badToGood">
            Flop <span>➝</span>
          </div>
        </div>
        <div className="result">
          {characters.slice(0, 12).map((character: ICharacter) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
