import MainMenu from "./MainMenu";
import style from "./Menu.module.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Dummy_Data = [
  {
    id: "q1",
    price: 10,
    title: "Chapati",
    image:
      "https://thumbs.dreamstime.com/b/indian-chapati-stack-roti-flat-bread-83341376.jpg",
  },
  {
    id: "q2",
    price: 15,
    title: "Pickle",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/mango-pickel-384018173-hjegs.png",
  },
  {
    id: "q3",
    price: 20,
    title: "Curd",
    image:
      "https://images.hindustantimes.com/rf/image_size_800x600/HT/p2/2016/07/09/Pictures/_90b9dbd2-45c0-11e6-b0f4-7520104944f6.tif",
  },
  {
    id: "q4",
    price: 5,
    title: "Sweet",
    image:
      "https://cdn.pixabay.com/photo/2014/12/22/12/33/sweets-577230__340.jpg",
  },
  {
    id: "q5",
    price: 20,
    title: "Daal",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQI6MhHAGPVDBF3HJ43acZll_IEsNrATyWg&usqp=CAU",
  },
  {
    id: "q6",
    price: 25,
    title: "Paneer Dish",
    image:
      "https://recipes.timesofindia.com/thumb/54504752.cms?width=1200&height=900",
  },
];

const Menu = () => {
  const totalItem = useSelector((store) => store.totalItem);
  const hide = useSelector((store) => store.isValidCard);
  const history = useHistory();
  const checkHandler = () => {
    if (totalItem < 2) {
      alert("add minimum 2 item");
    } else {
      history.push("/menu/Checkout");
    }
  };

  return (
    <div className={style.menu}>
      <div className={style.menu_head}>
        <nav>
          <h1>
            <span>👋</span> Choose Your Favourite Food <span>👋</span>
          </h1>
          <div>
            {hide && (
              <button onClick={checkHandler}>
                Check Your Cart: {totalItem}
              </button>
            )}
          </div>
        </nav>
      </div>
      {Dummy_Data.map((items) => {
        return (
          <MainMenu
            key={items.id}
            id={items.id}
            title={items.title}
            price={items.price}
            image={items.image}
          />
        );
      })}
    </div>
  );
};

export default Menu;
