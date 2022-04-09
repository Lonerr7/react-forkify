import RecipeIngredient from './RecipeIngredient/RecipeIngredient';
import s from './RecipeIngredients.module.scss';

const RecipeIngredients = () => {
  return (
    <div className={s.recipeIngredients}>
      <h2 className={s.recipeIngredients__title}>Recipe Ingredients</h2>
      <ul className={s.recipeIngredients__list}>
        <RecipeIngredient />
        <RecipeIngredient />
        <RecipeIngredient />
        <RecipeIngredient />
        <RecipeIngredient />
      </ul>
    </div>
  )
}

export default RecipeIngredients