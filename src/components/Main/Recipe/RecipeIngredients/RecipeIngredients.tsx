import { Ingredient } from '../../../../types/types';
import RecipeIngredient from './RecipeIngredient/RecipeIngredient';
import s from './RecipeIngredients.module.scss';

type RecipeIngredientsProps = {
  ingredients: Ingredient[];
};

const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({
  ingredients,
}) => {
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
