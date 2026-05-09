
import RecipeList from './components/RecipeList/RecipeList';
import { recipes } from './data/recipes';
import { GlobalStyle } from './styles/GlobalStyle';
import './App.css'

function App() {
  return (
    <>
      <GlobalStyle />

      <RecipeList recipes={recipes} />
    </>
  );
}

export default App;
