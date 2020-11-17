import React from "react";
import LessonCard from "./LessonCard";
export default {
  title: "Lesson Card",
  component: LessonCard,
};

export const LessonCardStory = () => (
  <LessonCard
    heading="Heading"
    title="Title"
    description="Lesson Description"
  />
);

LessonCardStory.story = {
  heading: "Heading",
  title: "Title",
  description: "Lesson Description",
};
