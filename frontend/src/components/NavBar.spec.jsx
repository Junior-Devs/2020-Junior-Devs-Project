import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar"

test("displays text passed as prop correctly", () => {
   const testnav_1 = "Test nav_1";
   const testnav_2 = "Test nav_2";
   const testnav_3 = "Test nav_3";
   const testnav_4 = "Test nav_4";
   const testnav_5 = "Test nav_5";
   render(<NavBar nav_1={testnav_1} nav_2={testnav_2} nav_3={testnav_3} nav_4={testnav_4} nav_5={testnav_5} />);
 
   expect(screen.queryByText(testnav_1, testnav_2, testnav_3, testnav_4,testnav_5));
 });
 