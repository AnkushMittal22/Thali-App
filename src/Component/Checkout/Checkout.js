import { useSelector } from "react-redux";
import NewCheckout from "./NewCheckout";
import style from "./Checkout.module.css";
import { useHistory } from "react-router-dom";

const Checkout = () => {
  const history = useHistory();
  const confirmHandler = () => {
    alert("Order Confirmed");
  };
  const BackToOrder = () => {
    history.push("/menu");
  };
  const checkcartItem = useSelector((store) => store.food);
  return (
    <div className={style.chekFirst}>
      <div className={style.checkout}>
        <ul>
          {checkcartItem.map((items) => {
            return (
              <NewCheckout
                key={items.id}
                id={items.id}
                price={items.price}
                title={items.title}
                image={items.image}
                totalPrice={items.totalPrice}
                quantity={items.quantity}
              />
            );
          })}
        </ul>
      </div>
      <footer>
        <div>
          <button onClick={BackToOrder}>Click Here To Go Back</button>
        </div>
        <div>
          {" "}
          <button onClick={confirmHandler}>Confirm Order</button>
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
