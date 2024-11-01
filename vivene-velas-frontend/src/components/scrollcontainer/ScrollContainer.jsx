import React from "react";
import style from './ScrollContainer.module.css'

const ScrollContainer = ({ children }) => {
  return (
    <div className={style['scroll-container']}>
      {children}
    </div>
  );
};

export default ScrollContainer;