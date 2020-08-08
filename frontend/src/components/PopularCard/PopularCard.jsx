import React from "react";
import PropTypes from "prop-types";
import cardPlaceholder from "../../assets/images/placeholders/card-popular.png";
import "./PopularCard.css";

function PopularCard({
  title,
  concepts,
  studentsEnrolled,
  reviews,
  courseUrl,
}) {
  const listOfConcepts =
    concepts === undefined || concepts.length === 0
      ? ""
      : concepts.reduce((first, second) => first.concat(", ", second));
  const studentsStat = `${
    studentsEnrolled < 0 || studentsEnrolled === null ? 0 : studentsEnrolled
  } ${studentsEnrolled === 1 ? "Student" : "Students"}`;
  const reviewsStat = `${reviews < 0 || reviews === null ? 0 : reviews} ${
    reviews === 1 ? "Review" : "Reviews"
  }`;

  return (
    <div className="card-popular" data-testid="popularCard">
      <img
        className="course-image"
        src={cardPlaceholder}
        alt="popular course card image"
      />
      <div className="course-info">
        <a href="#">
          <h3 className="course-title">{title}</h3>
        </a>
        <div className="concepts">
          <h5 className="concepts--title">Concepts Instructed</h5>
          <p className="concepts--list">{listOfConcepts}...</p>
        </div>
        <div className="course-stats">
          <a className="course-stat" data-testid="studentsStat" href="#">
            {studentsStat}
          </a>
          <div className="course-stat-br" />
          <a className="course-stat" data-testid="reviewsStat" href="#">
            {reviewsStat}
          </a>
          <div className="course-stat-br" />
          <a className="course-apply" href={courseUrl}>
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

PopularCard.propTypes = {
  title: PropTypes.string.isRequired,
  concepts: PropTypes.arrayOf(PropTypes.string).isRequired,
  studentsEnrolled: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  courseUrl: PropTypes.string,
};

PopularCard.defaultProps = {
  studentsEnrolled: 0,
  reviews: 0,
};

export default PopularCard;
