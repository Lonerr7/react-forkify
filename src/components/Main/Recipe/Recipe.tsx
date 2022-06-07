import { CurrentRecipe } from '../../../types/types';
import Preloader from '../../common/Preloader/Preloader';
import s from './Recipe.module.scss';
import RecipeControls from './RecipeControls/RecipeControls';
import RecipeHeader from './RecipeHeader/RecipeHeader';
import RecipeHowTo from './RecipeHowTo/RecipeHowTo';
import RecipeIngredients from './RecipeIngredients/RecipeIngredients';

type RecipeProps = {
  currentRecipe: CurrentRecipe | null;
  isFetching: boolean;
};

const Recipe: React.FC<RecipeProps> = ({ currentRecipe, isFetching }) => {
  return (
    <div className={s.recipe}>
      {isFetching ? (
        <Preloader />
      ) : (
        <div>
          {currentRecipe ? (
            <div>
              <RecipeHeader
                title={currentRecipe.title}
                imgUrl={currentRecipe.image_url}
              />
              <RecipeControls currentRecipe={currentRecipe} />
              <RecipeIngredients ingredients={currentRecipe.ingredients} />
              <RecipeHowTo directionUrl={currentRecipe.source_url} />
            </div>
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
};

export default Recipe;
