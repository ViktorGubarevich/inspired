import classnames from "classnames";
import style from "./ContainerLayout.module.scss";

export const ContainerLayout = ({ className, children }) => (
  <div className={classnames(style.container, className)}>{children}</div>
);
