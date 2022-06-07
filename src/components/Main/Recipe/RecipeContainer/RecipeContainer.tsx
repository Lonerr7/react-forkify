import { useAppSelector } from '../../../../hooks/hooks';
import Recipe from '../Recipe';

const RecipeContainer: React.FC = () => {
  const currentRecipe = useAppSelector(
    (state) => state.currentRecipe.currentRecipe
  );
  const isFetching = useAppSelector((state) => state.currentRecipe.isFetching);

  return <Recipe currentRecipe={currentRecipe} isFetching={isFetching} />;
};

export default RecipeContainer;
