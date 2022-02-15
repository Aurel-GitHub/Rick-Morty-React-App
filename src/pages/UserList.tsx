import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const UserList: React.FC = () => {
  const [listData, setListData] = useState<any>([]);
  useEffect(() => {
    let characterID = window.localStorage.characters
      ? window.localStorage.characters.split(",")
      : [];

    for (let i = 0; i < characterID.length; i++) {
      axios
        .get(
          `https://rickandmortyapi.com/api/character/${
            characterID && characterID[i]
          }`
        )
        .then((res) => setListData((listData: any) => [...listData, res.data]));
    }
  }, []);
  return (
    <div className="user-list-page">
      <Header />
      <h2>List des personnages selectionnés</h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((character: any) => (
            <Card character={character} key={character.id + `character`} />
          ))
        ) : (
          <h2>Aucun personnages selectionnés</h2>
        )}
      </div>
    </div>
  );
};

export default UserList;
