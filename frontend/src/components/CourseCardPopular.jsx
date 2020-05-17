import React from 'react';
import PropTypes from 'prop-types';
import cardPlaceholder from '../assets/images/placeholder/card-popular.png'
import './CourseCardPopular.css';

function CourseCardPopular({title, concepts, studentsEnrolled, reviews}) {
  const listOfConcepts = concepts.reduce((first,second) => first.concat(", ", second));
  const studentsStat = `${studentsEnrolled < 0 ? 0 : studentsEnrolled} ${studentsEnrolled === 1 ? "Student":"Students"}`;
  const reviewsStat = `${reviews < 0 ? 0 : reviews} ${reviews === 1 ? "Review":"Reviews"}`;

  return(
    <div className="card-popular">
      <img
        className="course-image"
        src={cardPlaceholder}
        alt="course card popular image"
      />
      <div className="course-info">
        <a href="#"><h3 className="course-title">{title}</h3></a>
        <div className="concepts">
          <h5 className="concepts--title">Concepts Instructed</h5>
          <p className="concepts--list">{listOfConcepts}...</p>
        </div>
        <div className="course-stats">
          <a className="course-stat" href="#">{studentsStat}</a>
          <div className="course-stat-br" />
          <a className="course-stat" href="#">{reviewsStat}</a>
          <div className="course-stat-br" />
          <a className="course-apply" href="#">Apply Now</a>
        </div>
      </div>
    </div>
  )
}

CourseCardPopular.propTypes = {
  title: PropTypes.string.isRequired,
  concepts: PropTypes.arrayOf(PropTypes.string).isRequired,
  studentsEnrolled: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};

CourseCardPopular.defaultProps = {
  studentsEnrolled: 0,
  reviews: 0
};

export default CourseCardPopular;