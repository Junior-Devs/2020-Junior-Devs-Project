import React from "react";
import { render, screen } from "@testing-library/react";
import LessonCard from "./LessonCard";

test("displays heading title and description passed as prop correctly", () => {
  const testHeading = "Test Name";
  const testTitle = "Test Title";
  const testDescription = "Test Description";
  render(
    <LessonCard
      heading={testHeading}
      title={testTitle}
      description={testDescription}
    />
  );

  expect(screen.queryByText(testTitle, testHeading, testDescription));
});
