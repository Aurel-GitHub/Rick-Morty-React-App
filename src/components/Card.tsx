/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { ICharacter } from "../interface";
import dateFormated from "../hooks/dateFormated";

interface ICharacterProps {
  character: ICharacter;
}

const Card: React.FC<ICharacterProps> = ({ character }: ICharacterProps) => {
  const loremIpsumImage: string = "https://picsum.photos/seed/picsum/200/300";
  const addLocalStorage = () => {
    let storeData = window.localStorage.characters
      ? window.localStorage.characters.split(",")
      : [];

    if (!storeData.includes(character.id.toString())) {
      storeData.push(character.id);
      window.localStorage.characters = storeData;
    }
  };
  const deleteStorage = () => {
    let storeData = window.localStorage.characters.split(",");
    let newData = storeData.filter((id: string) => id != character.id)
    window.localStorage.characters = newData;
    window.location.reload()

    
  }
  return (
    <div className="card" id={character.id}>
      <img
        src={character.image ? character.image : loremIpsumImage}
        alt="character-image"
      />
      <h2>{character.name}</h2>
      <div className="description">
        {character.status ? (
          <h3>
            statut:{" "}
            {character.status === "Alive"
              ? "En vie"
              : character.status === "Dead"
              ? "Mort"
              : "Inconnu"}
          </h3>
        ) : (
          ""
        )}
        {character.type ? <h3>type: {character.type}</h3> : ""}
        {character.species ? (
          <h3>espèce: {character.species === "Human" ? "Humain" : "Alien"}</h3>
        ) : (
          ""
        )}
        {character.gender ? (
          <h3>genre: {character.gender === "Male" ? "Homme" : "Femme"}</h3>
        ) : (
          ""
        )}
        {character.created ? (
          <h3>crée le: {dateFormated(character.created)}</h3>
        ) : (
          ""
        )}
        {document.location.href === 'http://localhost:3000/ma-liste' ? (        <div className="btn" onClick={() => deleteStorage()}>
          supprimer
        </div>) :(        <div className="btn" onClick={() => addLocalStorage()}>
          ajouter
        </div>)}


      </div>
    </div>
  );
};

export default Card;
