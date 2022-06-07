import s from './RecipeControls.module.scss';
import { BiTimeFive } from 'react-icons/bi';
import { MdPeopleAlt } from 'react-icons/md';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import RecipeControlsInfo from './RecipeControlsInfo/RecipeControlsInfo';
import {
  deleteBookmarkedRecipe,
  setBookmarkedRecipe,
} from '../../../../redux/bookmarksSlice';
import { CurrentRecipe } from '../../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';

type RecipeControlsProps = {
  currentRecipe: CurrentRecipe;
};

const RecipeControls: React.FC<RecipeControlsProps> = ({ currentRecipe }) => {
  const recipesIds = useAppSelector((state) => state.bookmarks.recipesIds);
  const dispatch = useAppDispatch();

  return (
    <div className={s.recipeControls}>
      <div className={s.recipeControls__box}>
        <RecipeControlsInfo
          classTag={s.recipeControls__info}
          icon={<BiTimeFive />}
          number={45}
          text="MINUTES"
        />
        <RecipeControlsInfo
          classTag={`${s.recipeControls__info} ${s.recipeControls__info_second}`}
          icon={<MdPeopleAlt />}
          number={4}
          text="SERVINGS"
        />
        <div className={s.recipeControls__buttons}>
          <button className={s.recipeControls__btn}>
            <AiOutlineMinusCircle />
          </button>
          <button className={s.recipeControls__btn}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
      <div className={s.recipeControls__about}>
        {recipesIds.includes(currentRecipe.id) ? (
          <button
            className={s.recipeControls__aboutBtn}
            onClick={() => dispatch(deleteBookmarkedRecipe(currentRecipe.id))}
          >
            <BsFillBookmarkFill className={s.recipeControls__aboutIcon} />
          </button>
        ) : (
          <button
            className={s.recipeControls__aboutBtn}
            onClick={() =>
              dispatch(
                setBookmarkedRecipe({
                  newBookmarkedRecipe: currentRecipe,
                  newRecipeId: currentRecipe.id,
                })
              )
            }
          >
            <BsBookmark className={s.recipeControls__aboutIcon} />
          </button>
        )}
      </div>
    </div>
  );
};

export default RecipeControls;
