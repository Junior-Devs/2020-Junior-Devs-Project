import React from "react";
import CourseCard from "./CourseCard";

export default {
  title: "Course Card",
  component: CourseCard,
};

export const CourseCardStory = () => (
  <CourseCard
    name='A journey to a "Zero Waste" Lifestyle'
    description="Haec subinde Constantius audiens et queaedam referente Thalassio doctus, quem"
  />
);

CourseCard.story = {
  name: 'A journey to a "Zero Waste" Lifestyle',
  description:
    "Haec subinde Constantius audiens et queaedam referente Thalassio doctus, quem",
};
