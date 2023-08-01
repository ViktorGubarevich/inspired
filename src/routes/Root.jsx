import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Layout/Main";

const list = [
  {
    link: "women",
    title: "Женщины",
    categories: [
      { link: "bras", title: "Бюстгалтеры" },
      { link: "panties", title: "Трусы" },
      { link: "socks", title: "Носки" },
      { link: "bathrobes", title: "Халаты" },
      { link: "thermal", title: "Термобелье" },
      { link: "pajamas", title: "Пижамы" },
    ],
  },
  {
    link: "men",
    title: "Мужчины",
    categories: [
      { link: "panties", title: "Трусы" },
      { link: "socks", title: "Носки" },
      { link: "bathrobes", title: "Халаты" },
      { link: "thermal", title: "Термобелье" },
    ],
  },
];

const Root = () => (
  <>
    <Header list={list} />
    <Main>
      <Outlet />
    </Main>
    <Footer list={list} />
  </>
);

export default Root;
