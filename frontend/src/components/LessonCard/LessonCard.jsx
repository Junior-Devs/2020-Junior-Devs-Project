import React from "react";
import styles from "./LessonCard.module.css";
import logo from "../../assets/pollution.png";

const LessonCard = (props) => {
  return (
    <div className="card">
      <div className="contentLeft">
        <div className="courseLogo">1</div>
        <div className="courseTitle">Course 1</div>
        <div className="courseHeading"> Title </div>
        <p className="courseContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          quibusdam commodi explicabo, blanditiis autem perspiciatis
          exercitationem et, eos quod amet dicta fugiat recusandae quis nam ea
          doloremque delectus tenetur soluta. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Enim error quisquam suscipit voluptatem,
          officia voluptates facere voluptatibus incidunt nemo reprehenderit
          perspiciatis nihil ex mollitia magni maxime debitis consequuntur earum
          inventore.
        </p>
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
