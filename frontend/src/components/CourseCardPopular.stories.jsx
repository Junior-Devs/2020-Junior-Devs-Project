import React from 'react';
import CourseCardPopular from './CourseCardPopular';

export default {
  component: CourseCardPopular,
  title: 'Course Card Popular',
  excludeStories: /.*Data$/,
};

export const courseData = {
  id: '1',
  imgSrc: 'https://bit.ly/3dThyIi',
  title: 'A journey to a "Zero Waste" Lifestyle',
  concepts: ['Concept1', 'Concept2'],
  studentsEnrolled: 350,
  reviews: 10,
};

export const Default = () => <CourseCardPopular {...courseData} />;