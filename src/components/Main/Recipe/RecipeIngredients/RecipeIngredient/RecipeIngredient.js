import s from './RecipeIngredient.module.scss';
import { TiTick } from 'react-icons/ti';

const RecipeIngredient = () => {
  return (
    <li className={s.recipeIngredient}>
      <div className={s.recipeIngredient__iconBox}>
        <TiTick
          width="30px"
          height="30px"
          className={s.recipeIngredient__icon}
        />
      </div>
      <div className={s.recipeIngredient__textBox}>
        <p className={s.recipeIngredient__quantity}>1</p>
        <p className={s.recipeIngredient__descr}>medium</p>
      </div>
    </li>
  );
};

export default RecipeIngredient;
