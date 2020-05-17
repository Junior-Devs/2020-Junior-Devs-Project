import React from 'react';
import CourseCardPopular from './CourseCardPopular';

export default {
  component: CourseCardPopular,
  title: 'Course Card Popular',
  excludeStories: /.*Data$/,
};

export const courseData = {
  id: '1',
  title: 'A journey to a "Zero Waste" Lifestyle',
  concepts: ['Concept1', 'Concept2'],
  studentsEnrolled: 350,
  reviews: 10,
};

export const courseSingularData = {
  id: '1',
  title: 'A course with just one review and student',
  concepts: ['Concept1', 'Concept2'],
  studentsEnrolled: 1,
  reviews: 1,
};


export const Default = () => <CourseCardPopular {...courseData} />;
export const SingularDigits = () => <CourseCardPopular {...courseSingularData} />;