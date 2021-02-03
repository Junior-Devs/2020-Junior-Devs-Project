import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar"

test("displays text passed as prop correctly", () => {
   const testText = "Test Text";
   render(<NavBar text={testText} />)
 
   expect(screen.queryByText(testText));
 });
 