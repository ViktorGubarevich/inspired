import { Category } from "./Category/Category";
import { Gender } from "./Gender/Gender";
import { ContainerLayout } from "../../Layout/ContainerLayout/ContainerLayout";

export const Navigation = () => (
  <nav>
    <ContainerLayout>
      <Gender />
      <Category />
    </ContainerLayout>
  </nav>
);
