import RecipeIngredient from './RecipeIngredient/RecipeIngredient';
import s from './RecipeIngredients.module.scss';

const RecipeIngredients = ({ ingredients }) => {
  const elements = ingredients.map((ing, i) => (
    <RecipeIngredient key={i} quantity={ing.quantity} descr={ing.description} />
  ));
  return (
    <div className={s.recipeIngredients}>
      <h2 className={s.recipeIngredients__title}>Recipe Ingredients</h2>
      <ul className={s.recipeIngredients__list}>{elements}</ul>
    </div>
  );
};

export default RecipeIngredients;
