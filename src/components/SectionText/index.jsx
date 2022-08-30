import React from "react";
import textPattern from "../../assets/images/text_pattern.png";
import classes from "./SectionText.module.css";

const SectionText = (props) => {
  return (
    <div className={`${classes.sectionText} text-shadow`} {...props}>
      <img src={textPattern} alt="" />
      {props.children}
    </div>
  );
};

export default SectionText;
