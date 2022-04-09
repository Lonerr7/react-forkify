import s from './RecipeIngredient.module.scss';
import { TiTick } from 'react-icons/ti';

const RecipeIngredient = ({ quantity, descr }) => {
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
        <p className={s.recipeIngredient__quantity}>{quantity}</p>
        <p className={s.recipeIngredient__descr}>{descr}</p>
      </div>
    </li>
  );
};

export default RecipeIngredient;
