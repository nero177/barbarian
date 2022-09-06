import React from "react";
import classes from './GoToMain.module.css'

const GoToMain = () => {
  return (
    <a href="/" className={classes.goToMain}>
      ← На главную
    </a>
  );
};

export default GoToMain;
