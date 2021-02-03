import React from "react";
import NavBar from "./NavBar"

export default {
   title: "Navigation bar",
   component: NavBar
};

export const NavBarStory = () =>
   <NavBar
      nav_1="Home"
      nav_2="Courses"
      nav_3="About"
      nav_4="Register"
      nav_5="Login" />;

NavBarStory.story = {
   nav_1: "Home",
   nav_2: "Courses",
   nav_3: "About",
   nav_4: "Register",
   nav_5: "Login"
}