import { MouseEvent } from "react";
import {
  AiOutlineUser,
  AiOutlinePlus,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { GiVillage } from "react-icons/gi";

import Link from "next/link";

import { useFavorite } from "../../hooks/useFavorite";
import { Character } from "../../interfaces";
import Image from "../Image";
import * as S from "./styles";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { toggleFavorite, checkFavorite } = useFavorite();
  const { _id, name, village, avatarSrc } = character;

  const isFavorite = checkFavorite(character);

  const handleFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    toggleFavorite(character);
  };

  return (
    <Link href={`/character/${_id}`} passHref>
      <S.Container>
        <S.Button type="button" onClick={handleFavorite}>
          {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
          <S.Popover>
            {isFavorite ? "Remove favorite" : "Add favorite"}
          </S.Popover>
        </S.Button>

        <S.ImageContainer>
          <Image src={avatarSrc} alt={name} width={150} height={150} />

          <div className="image-effect">
            <AiOutlinePlus /> Info
          </div>
        </S.ImageContainer>

        <S.Content>
          <p className="character-name">
            <AiOutlineUser />
            {name}
          </p>
          <p className="village">
            <GiVillage /> {village}
          </p>
        </S.Content>
      </S.Container>
    </Link>
  );
};

export default CharacterCard;
