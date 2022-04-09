import s from './Recipe.module.scss';
import RecipeControls from './RecipeControls/RecipeControls';
import RecipeHeader from './RecipeHeader/RecipeHeader';
import RecipeIngredients from './RecipeIngredients/RecipeIngredients';

const Recipe = () => {
  return (
    <div className={s.recipe}>
      <RecipeHeader />
      <RecipeControls />
      <RecipeIngredients />
    </div>
  );
};

export default Recipe;
