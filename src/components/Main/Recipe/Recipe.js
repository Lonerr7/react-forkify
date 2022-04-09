import s from './Recipe.module.scss';
import RecipeControls from './RecipeControls/RecipeControls';
import RecipeHeader from './RecipeHeader/RecipeHeader';
import RecipeHowTo from './RecipeHowTo/RecipeHowTo';
import RecipeIngredients from './RecipeIngredients/RecipeIngredients';

const Recipe = () => {
  return (
    <div className={s.recipe}>
      <RecipeHeader />
      <RecipeControls />
      <RecipeIngredients />
      <RecipeHowTo />
    </div>
  );
};

export default Recipe;
