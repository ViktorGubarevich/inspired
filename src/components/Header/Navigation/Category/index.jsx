import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import style from "./Category.module.scss";

const Category = () => {
  const { activeGender, categories } = useSelector((state) => state.navigation);

  return (
    <ul className={style.category}>
      {categories[activeGender]?.list?.map((item) => (
        <li key={item.slug} className={style.item}>
          <NavLink
            to={`${activeGender}/${item.slug}`}
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
