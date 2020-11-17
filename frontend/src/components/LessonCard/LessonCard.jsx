import React from "react";
import "./LessonCard.css";
import logo from "../../assets/pollution.png";
import PropTypes from "prop-types";

const LessonCard = ({ heading, title, description }) => {
  return (
    <div className="card">
      <div className="contentLeft">
        <div className="courseLogo">1</div>
        <div className="courseTitle">{heading}</div>
        <div className="courseHeading"> {title} </div>
        <p className="courseContent">{description}</p>
        <div className="buttonDiv">
          <button className="courseButton">CONTINUE</button>
        </div>
        <div className="separator"></div>
        <div className="progress">
          <div className="progressBar"></div>
        </div>
        <div className="progressPercent">45%</div>
        <div className="duration">45 minutes left</div>
      </div>
      <div className="contentRight">
        <img src={logo} alt="pollution.png" />
      </div>
    </div>
  );
};

export default LessonCard;

LessonCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

