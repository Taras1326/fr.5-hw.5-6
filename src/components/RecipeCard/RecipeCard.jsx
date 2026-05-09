import Difficulty from '../Difficulty/Difficulty';

import { TfiAlarmClock } from 'react-icons/tfi';
import { MdOutlineLocalDining } from 'react-icons/md';
import { GiBurningEye } from 'react-icons/gi';

import {
  Card,
  Image,
  Title,
  InfoBox,
} from './RecipeCard.styled';

const RecipeCard = ({ recipe }) => {
  const {
    name,
    image,
    time,
    servings,
    calories,
    difficulty,
  } = recipe;

  return (
    <Card hard={difficulty === 2}>
      <Image src={image} alt={name} />

      <Title>{name}</Title>

      <InfoBox>
        <span>
          <TfiAlarmClock />
          {time} min
        </span>

        <span>
          <MdOutlineLocalDining />
          {servings} servings
        </span>

        <span>
          <GiBurningEye />
          {calories} calories
        </span>
      </InfoBox>

      <Difficulty difficulty={difficulty} />
    </Card>
  );
};

export default RecipeCard;