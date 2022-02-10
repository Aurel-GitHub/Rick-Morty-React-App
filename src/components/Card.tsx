/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { ICharacter } from "../interface";
import { DateTime } from "luxon";

interface ICharacterProps {
  character: ICharacter;
}
const Card: React.FC<ICharacterProps> = ({ character }: ICharacterProps) => {
  const loremIpsumImage: string = "https://picsum.photos/seed/picsum/200/300";

  const dateFormated = new Date(character.created).toLocaleDateString("fr-FR");

  return (
    <div className="card">
      <img
        src={character.image ? character.image : loremIpsumImage}
        alt="character-image"
      />
      <h2>{character.name}</h2>
      <h5>statut: {character.status}</h5>
      <h5>type: {character.type}</h5>
      <h5>espèce: {character.species}</h5>
      <h5>genre: {character.gender}</h5>
      <h5>crée le: {dateFormated}</h5>
    </div>
  );
};

export default Card;
