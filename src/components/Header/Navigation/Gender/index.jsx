import { NavLink, useLocation } from "react-router-dom";
import style from "./Gender.module.scss";
import classNames from "classnames";

const Gender = ({ list }) => {
  const location = useLocation();
  const gender = location.pathname.split("/")[1] || "women";

  return (
    <ul className={style.gender}>
      {list.map((item) => (
        <li key={item.link} className={style.item}>
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              classNames(
                style.link,
                (isActive || gender === item.link) && style.linkActive
              )
            }
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Gender;
