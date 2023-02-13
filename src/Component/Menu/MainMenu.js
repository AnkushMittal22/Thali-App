import { useDispatch, useSelector } from "react-redux";
import { actionSlice } from "../../store";
import style from "./MainMenu.module.css";

const MainMenu = (props) => {
  const { id, price, title, image } = props;
  const dispatch = useDispatch();
  const item = useSelector((store) => store.totalItem);

  const addValue = () => {
    dispatch(actionSlice.addtoCart({ id, image, price, title }));
    dispatch(actionSlice.hideCard());
  };
  return (
    <div className={style.main_menu}>
      <div>
        <img src={image} alt="image1" />
        <hr />
      </div>
      <div className={style.mid_menu}>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <h3>{price}/-</h3>
        </div>
        <div className={style.action}>
          <button onClick={addValue}>Add Cart</button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default MainMenu;
