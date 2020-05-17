import React from 'react';
import './CourseCardPopular.css';

function CourseCardPopular({imgSrc, title, concepts, studentsEnrolled, reviews}) {
  const listOfConcepts = concepts.reduce((first,second) => first.concat(", ", second));
  const studentsStat = `${studentsEnrolled} ${studentsEnrolled === 1 ? "Student":"Students"}`;
  const reviewsStat = `${reviews} ${reviews === 1 ? "Review":"Reviews"}`;

  return(
    <div className="card-popular">
      <img className="card-popular--image" src={imgSrc} alt="course card popular image" />
      <div className="card-popular--container">
        <h3 className="card-popular--title">{title}</h3>
        <h5 className="card-popular--concepts-title">Concepts Instructed</h5>
        <p className="card-popular--concepts-content">{listOfConcepts}...</p>
        <div className="card-popular--stat-container">
          <a className="card-popular--stat" href="#">{studentsStat}</a>
          <div className="card-popular--stat-br" />
          <a className="card-popular--stat" href="#">{reviewsStat}</a>
          <div className="card-popular--stat-br" />
          <a className="card-popular--apply-now" href="#">Apply Now</a>
        </div>
      </div>
    </div>
  )
}

export default CourseCardPopular;