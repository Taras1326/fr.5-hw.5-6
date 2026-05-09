import { Wrapper, Title, LevelList, Level } from './Difficulty.styled';

const Difficulty = ({ difficulty }) => {
  return (
    <Wrapper>
      <Title>Difficulty</Title>

      <LevelList>
        <Level active={difficulty === 1}>Easy</Level>
        <Level active={difficulty === 3}>Medium</Level>
        <Level active={difficulty === 2}>Hard</Level>
      </LevelList>
    </Wrapper>
  );
};

export default Difficulty;