import { Link } from "react-router-dom";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={style.header_main}>
      <div>
        <h1>
          The <span>Thali</span>{" "}
        </h1>
      </div>
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
