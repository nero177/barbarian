import React from "react";
import textPattern from "../../assets/images/text_pattern.png";
import classes from "./SectionText.module.css";

const SectionText = (props) => {
  return (
    <React.Fragment>
      {props.date ? <div className="date text-shadow">{props.date}</div> : ''}
      <div className={`${classes.sectionText} text-shadow`} {...props}>
        <img src={textPattern} alt="" />
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default SectionText;
