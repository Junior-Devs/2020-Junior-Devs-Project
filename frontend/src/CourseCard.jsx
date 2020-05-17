import React from "react";
import './CourseCard.css'; 
import PropTypes from 'prop-types'; 

const CourseCard = ({name, description}) => {
    return <div className="CourseCard">
                <div className="CardBody">
                    <span>Course</span>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
                <div className="CardButton">
                    <button>Continue</button>
                </div>     
            </div>  
}; 
         
CourseCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default CourseCard;

