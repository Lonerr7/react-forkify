import s from './RecipeHeader.module.scss';

const RecipeHeader = () => {
  return (
    <div className={s.recipeHeader}>
      <div className={s.recipeHeader__imgBox}>
        <img
          className={s.recipeHeader__img}
          src="https://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg"
          alt="recipe pic"
        />
      </div>
      <h1 className={s.recipeHeader__title}>
        <span>Title</span>
      </h1>
    </div>
  );
};

export default RecipeHeader;
