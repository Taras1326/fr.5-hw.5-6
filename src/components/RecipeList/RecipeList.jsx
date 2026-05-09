import RecipeCard from '../RecipeCard/RecipeCard';

import styled from 'styled-components';

const List = styled.ul`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px;

  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
`;

const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </List>
  );
};

export default RecipeList;