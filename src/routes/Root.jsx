import { Outlet } from "react-router-dom";

import { Header } from "../components/Header/Header";
import { MainLayout } from "../components/Layout/MainLayout/MainLayout";
import { Footer } from "../components/Footer/Footer";

export const Root = () => (
  <>
    <Header />
    <MainLayout>
      <Outlet />
    </MainLayout>
    <Footer />
  </>
);
