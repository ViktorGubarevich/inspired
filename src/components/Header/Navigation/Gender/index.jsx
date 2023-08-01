import { NavLink } from "react-router-dom";
import style from "./Gender.module.scss";
import classNames from "classnames";

const Gender = ({ list }) => (
  <ul className={style.gender}>
    {list.map((item) => (
      <li key={item.link} className={style.item}>
        <NavLink
          to={item.link}
          className={({ isActive }) =>
            classNames(style.link, isActive && style.linkActive)
          }
        >
          {item.title}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Gender;
