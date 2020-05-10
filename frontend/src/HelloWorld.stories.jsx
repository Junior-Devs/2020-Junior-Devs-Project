import React from "react";
import HelloWorld from "./HelloWorld";

export default {
  title: "Hello World",
  component: HelloWorld,
};

export const HelloWorldStory = () => <HelloWorld text="Hello World!" />;

HelloWorldStory.story = {
  text: "Hello World",
};
