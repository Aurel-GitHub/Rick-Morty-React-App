import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICharacter } from "../interface";
import Card from "./Card";

const Form: React.FC = () => {
  // tableau de data conservé dans le state
  const [characters, setCharactersData] = useState<ICharacter[] | []>([]);
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  //useEffect joue une function une fois que le component est monté
  // [] est un calleback est comme il est vide il ne sera joué qu'une seule fois
  // [search] à chaque modification de la valeur du search il va rejouer le useEffect
  useEffect(() => {
    axios
      // https://rickandmortyapi.com/api/character
      .get(
        `https://rickandmortyapi.com/api/character/${
          !search ? `` : `?name=` + search
        }${!status ? `` : `&status=` + status}`
        // `https://rickandmortyapi.com/api/character/?name=morty&status=dead`
      )
      .then((res) => setCharactersData(res.data.results));
  }, [search, status]);
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le nom d'un perso"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            type="submit"
            value="Rechercher"
            disabled={!search ? true : false}
            style={!search ? { cursor: "not-allowed" } : { cursor: "pointer" }}
          />
        </form>

        <div className="btn-sort-container">
          <div
            className="btn-sort"
            id="alive"
            hidden={search ? false : true}
            style={
              status === "Dead"
                ? { cursor: "not-allowed" }
                : { cursor: "pointer" }
            }
            onClick={() => {
              setStatus("alive");
            }}
          >
            En vie <span>✓</span>
          </div>
          <div
            className="btn-sort"
            id="dead"
            hidden={search ? false : true}
            style={
              status === "Alive"
                ? { cursor: "not-allowed" }
                : { cursor: "pointer" }
            }
            onClick={() => {
              setStatus("dead");
            }}
          >
            Mort <span>⤫</span>
          </div>
        </div>

        <div className="result">
          {characters
            .slice(0, 12)
            .filter((item) => {
              if (status === "alive") {
                return item.status === "Alive";
              } else if (status === "dead") {
                return item.status === "Dead";
              } else {
                return item;
              }
            })
            .map((character: ICharacter) => (
              <Card key={character.id} character={character} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
