import React from "react";
import { render, screen } from "@testing-library/react";
import CourseCard from "./CourseCard";

test("displays name and description passed as prop correctly", () => {
  const testName = "Test Name";
  const testDescription = "Test Description"
  render(<CourseCard name={testName} description={testDescription} />);

  expect(screen.queryByText(testName, testDescription));
});
