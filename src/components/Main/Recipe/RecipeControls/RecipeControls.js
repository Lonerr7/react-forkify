import s from './RecipeControls.module.scss';
import { BiTimeFive } from 'react-icons/bi';
import { MdPeopleAlt } from 'react-icons/md';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import RecipeControlsInfo from './RecipeControlsInfo/RecipeControlsInfo';
import { connect } from 'react-redux';
import {
  setBookmarkedRecipeSuccess,
  deleteBookmarkedRecipeSuccess,
} from '../../../../redux/bookmarksReducer';

const RecipeControls = ({
  recipesIds,
  setBookmarkedRecipeSuccess,
  currentRecipe,
  deleteBookmarkedRecipeSuccess,
}) => {
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
        <button className={s.recipeControls__aboutBtn}>
          {recipesIds.includes(currentRecipe.id) ? (
            <BsFillBookmarkFill
              className={s.recipeControls__aboutIcon}
              onClick={() => deleteBookmarkedRecipeSuccess(currentRecipe.id)}
            />
          ) : (
            <BsBookmark
              className={s.recipeControls__aboutIcon}
              onClick={() =>
                setBookmarkedRecipeSuccess(currentRecipe, currentRecipe.id)
              }
            />
          )}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recipesIds: state.bookmarks.recipesIds,
});

const dispatchToProps = {
  setBookmarkedRecipeSuccess,
  deleteBookmarkedRecipeSuccess,
};

export default connect(mapStateToProps, dispatchToProps)(RecipeControls);
