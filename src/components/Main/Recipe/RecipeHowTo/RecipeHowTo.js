import s from './RecipeHowTo.module.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';

const RecipeHowTo = ({ directionUrl }) => {
  return (
    <div className={s.recipeHowTo}>
      <h2 className={s.recipeHowTo__title}>How to cook it</h2>
      <p className={s.recipeHowTo__text}>
        This recipe was carefully designed and tested by{' '}
        <span>Closet Cooking</span>. Please check out directions at their
        website.
      </p>
      <a
        className={s.recipeHowTo__link}
        href={directionUrl}
        target="_blank"
        rel="noreferrer"
      >
        <span>Directions</span>
        <AiOutlineArrowRight className={s.recipeHowTo__arrow} />
      </a>
    </div>
  );
};

export default RecipeHowTo;
