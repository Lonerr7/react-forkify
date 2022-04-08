import s from './Recipe.module.scss';
import RecipeControls from './RecipeControls/RecipeControls';
import RecipeHeader from './RecipeHeader/RecipeHeader';

const Recipe = () => {
  return (
    <div className={s.recipe}>
      <RecipeHeader />
      <RecipeControls />
    </div>
  );
};

export default Recipe;
