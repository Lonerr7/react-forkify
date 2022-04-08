import s from './Recipe.module.scss';
import RecipeHeader from './RecipeHeader/RecipeHeader';

const Recipe = () => {
  return (
    <div className={s.recipe}>
      <RecipeHeader />
    </div>
  );
};

export default Recipe;
