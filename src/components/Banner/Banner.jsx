import { NavLink } from "react-router-dom";

import { ContainerLayout } from "../Layout/ContainerLayout/ContainerLayout";
import { API_URL } from "../../const";

import style from "./Banner.module.scss";

export const Banner = ({ data }) =>  (
    data && 
    <section 
      className={style.banner}
      style={{
        backgroundImage: `url(${API_URL}/${data.bg.desktop})`
      }}
    >
      <ContainerLayout>
        <div className={style.content}>
          <h2 className={style.title}>{data.description}</h2>
          <NavLink className={style.link} to={`/product/${data.id}`}>
            Перейти
          </NavLink>
        </div>
      </ContainerLayout>
    </section>
);
