import s from './Recipe.module.scss';
import RecipeControls from './RecipeControls/RecipeControls';
import RecipeHeader from './RecipeHeader/RecipeHeader';
import RecipeHowTo from './RecipeHowTo/RecipeHowTo';
import RecipeIngredients from './RecipeIngredients/RecipeIngredients';

const Recipe = ({ currentRecipe }) => {
  return (
    <div className={s.recipe}>
      {currentRecipe ? (
        <div>
          <RecipeHeader
            title={currentRecipe.title}
            imgUrl={currentRecipe.image_url}
          />
          <RecipeControls />
          <RecipeIngredients ingredients={currentRecipe.ingredients} />
          <RecipeHowTo directionUrl={currentRecipe.source_url} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Recipe;
