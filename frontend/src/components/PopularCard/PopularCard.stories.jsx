import React from 'react';
import PopularCard from './PopularCard';

export default {
  component: PopularCard,
  title: 'PopularCard',
  excludeStories: /.*Data$/,
};

export const defaultData = {
  id: '1',
  title: 'A journey to a "Zero Waste" Lifestyle',
  concepts: ['Concept1', 'Concept2'],
  studentsEnrolled: 350,
  reviews: 10,
};

export const oneReviewData = {
  id: '2',
  title: 'A course with just one review and student',
  concepts: ['Concept1', 'Concept2'],
  studentsEnrolled: 100,
  reviews: 1,
};

export const oneStudentData = {
  id: '3',
  title: 'A course with just one review and student',
  concepts: ['Concept1', 'Concept2'],
  studentsEnrolled: 1,
  reviews: 241,
};

export const Default = () => <PopularCard {...defaultData} />;
export const OneReview = () => <PopularCard {...oneReviewData} />;
export const OneStudent = () => <PopularCard {...oneStudentData} />;