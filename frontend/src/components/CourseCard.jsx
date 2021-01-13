import React from "react";
import "./CourseCard.css";
import pollution from "../assets/images/pollution.png";
import PropTypes from "prop-types";

const CourseCard = ({ name, description }) => {
  return (
    <div className="CourseCard">
      <div className="CardBody">
        <div className="CardHeader">
          <img className="CardImage" src={pollution} alt="Pollution Image" />
          <span>Course</span>
        </div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className="CardButton">
        <button>Continue</button>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CourseCard;
