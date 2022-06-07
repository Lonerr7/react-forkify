import s from './RecipeHeader.module.scss';

type RecipeHeaderProps = {
  title: string;
  imgUrl: string;
};

const RecipeHeader: React.FC<RecipeHeaderProps> = ({ title, imgUrl }) => {
  return (
    <div className={s.recipeHeader}>
      <div className={s.recipeHeader__imgBox}>
        <img className={s.recipeHeader__img} src={imgUrl} alt="recipe pic" />
      </div>
      <h1 className={s.recipeHeader__title}>
        <span>{title}</span>
      </h1>
    </div>
  );
};

export default RecipeHeader;
