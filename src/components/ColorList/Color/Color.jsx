import { useEffect, useRef } from "react";

import style from "./Color.module.scss";
import classNames from "classnames";

export const Color = ({ color, check }) => {
  const colorRef = useRef(null);

  useEffect(() => {
    colorRef.current.style.setProperty('--data-color', color)
  }, [color]);
  
  return (
    <li
      ref={colorRef}
      className={classNames(style.color, check ? style.colorCheck : '')}
    />
  )
};