import s from './RecipeControlsInfo.module.scss';

type RecipeControlsInfoProps = {
  classTag: string;
  icon: JSX.Element;
  number: number;
  text: string;
};

const RecipeControlsInfo: React.FC<RecipeControlsInfoProps> = ({
  icon,
  number,
  text,
  classTag,
}) => {
  return (
    <div className={classTag}>
      <div className={s.recipeControlsInfo__iconBox}>{icon}</div>
      <span className={s.recipeControlsInfo__number}>{number}</span>
      <span className={s.recipeControlsInfo__text}>{text}</span>
    </div>
  );
};

export default RecipeControlsInfo;
