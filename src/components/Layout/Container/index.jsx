import classnames from "classnames";
import style from "./Container.module.scss";

const Container = ({ className, children }) => (
  <div className={classnames(style.container, className)}>{children}</div>
);

export default Container;
