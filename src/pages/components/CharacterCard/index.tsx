import Image from "next/image";
import * as S from "./styles";

import { GiVillage } from "react-icons/gi";
import { AiOutlineUser, AiOutlinePlus } from "react-icons/ai";

const villages = {
  "cloud village": <GiVillage />,
  "craftsman village": <GiVillage />,
  "grass village": <GiVillage />,
  "heat haze village": <GiVillage />,
  "hot springs village": <GiVillage />,
  "leaf village": <GiVillage />,
  "lock village": <GiVillage />,
  "mist village": <GiVillage />,
  "pink flower village": <GiVillage />,
  "rain village": <GiVillage />,
  "rock village": <GiVillage />,
  "sand village": <GiVillage />,
  "sound village": <GiVillage />,
  "star village": <GiVillage />,
  "stone village": <GiVillage />,
  "waterfall village": <GiVillage />,
  "whirling tides village": <GiVillage />,
};

type Villages = typeof villages;

type Village = keyof Villages;

interface CharacterCardProps {
  character: {
    name: string;
    village: string;
    avatarSrc: string;
  };
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { name, village, avatarSrc } = character;

  return (
    <S.Container>
      <S.ImageContainer>
        <Image src={avatarSrc} alt={name} width={150} height={150} />
      </S.ImageContainer>

      <S.Content>
        <p className="character-name">
          <AiOutlineUser />
          {name}
        </p>
        <p className="village">
          {villages[village as Village]} {village}
        </p>
      </S.Content>
      <S.Button>
        <AiOutlinePlus /> Info
      </S.Button>
    </S.Container>
  );
};

export default CharacterCard;
