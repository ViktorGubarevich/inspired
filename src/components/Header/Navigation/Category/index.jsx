import { NavLink, useLocation } from "react-router-dom";
import style from "./Category.module.scss";
import classNames from "classnames";

const Category = ({ list }) => {
  const location = useLocation();
  const gender = location.pathname.split("/")[1] || "women";
  const categoriesList = list.find((item) => item.link === gender);

  return (
    <ul className={style.category}>
      {categoriesList.categories.map((item) => (
        <li key={item.link} className={style.item}>
          <NavLink
            to={`${gender}/${item.link}`}
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
};

export default Category;
