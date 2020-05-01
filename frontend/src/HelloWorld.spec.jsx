import React from "react";
import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

test("displays text passed as prop correctly", () => {
  const testText = "Test Text";
  render(<HelloWorld text={testText} />);

  expect(screen.queryByText(testText));

  expect(screen.getByText(testText)).toBeInTheDocument();
});
