import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionSlice } from "../../store";
const Home = () => {
  const dispatch = useDispatch();
  const orderHanlder = () => {
    dispatch(actionSlice.orderPage());
  };

  return (
    <div className={style.home}>
      <header>
        <h1>Ghar Jesa Khana</h1>
      </header>
      <aside>
        <Link to={"/menu"}>
          <button onClick={orderHanlder}>Click Here to Order Now</button>
        </Link>
      </aside>
      <section>
        <h1>Ab Milega Yha</h1>
      </section>
      <footer>
        <h1>To Kro Order Jldi</h1>
      </footer>
    </div>
  );
};

export default Home;
