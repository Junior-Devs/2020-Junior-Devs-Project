import React from "react";
import { withKnobs, text, array, number } from "@storybook/addon-knobs";
import PopularCard from "./PopularCard";

export default {
  component: PopularCard,
  title: "PopularCard",
  decorators: [
    withKnobs({
      escapeHTML: false,
    }),
  ],
  excludeStories: /.*Props$/,
};

export const initProps = {
  id: "1",
  title: 'A journey to a "Zero Waste" Lifestyle',
  concepts: ["Concept1", "Concept2"],
  courseUrl: "http://google.com",
  studentsEnrolled: 350,
  reviews: 10,
};

export const defaultView = () => (
  <PopularCard
    title={text("Title", initProps.title)}
    concepts={array("Tags", initProps.concepts)}
    studentsEnrolled={number("Students Enrolled", initProps.studentsEnrolled)}
    reviews={number("Reviews", initProps.reviews)}
    courseUrl={text("Link", initProps.courseUrl)}
  />
);
