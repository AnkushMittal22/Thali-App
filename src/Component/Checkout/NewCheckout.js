import { useDispatch } from "react-redux";
import { actionSlice } from "../../store";
import style from "./NewCheckout.module.css";

const NewCheckout = (props) => {
  const { image, title, price, id, totalPrice, quantity } = props;
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(actionSlice.addtoCart({ price, quantity, id }));
  };
  const decrementHandler = () => {
    dispatch(actionSlice.removeCart({ price, quantity, id }));
  };

  return (
    <div className={style.newCheckout}>
      {/* <div>
        <img src={image} alt="image" />
      </div>
      <div>
        <h2>Title</h2>
        <p> {title}</p>
      </div>
      <div>
        <h2>Price</h2>
        <p>{price}</p>
      </div>
      <div>
        <h3>Total Price</h3>
        <p>{totalPrice}</p>
      </div>

      <section>
        <button onClick={incrementHandler}>+</button>
        <p>{quantity}</p>
        <button onClick={decrementHandler}>-</button>
      </section> */}

      <li className={style.item}>
        <nav>
          <img src={image} alt="image" />
        </nav>
        <header>
          <h3>{title}</h3>
          <div className={style.price}>
            ${totalPrice.toFixed(2)}{" "}
            <span className={style.itemprice}>(${price.toFixed(2)}/item)</span>
          </div>
        </header>
        <div className={style.details}>
          <div className={style.quantity}>
            x <span>{quantity}</span>
          </div>
          <div className={style.actions}>
            <button onClick={decrementHandler}>-</button>
            <button onClick={incrementHandler}>+</button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default NewCheckout;
