import React from "react";
import './CourseCard.css'; 

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
         
export default CourseCard;
