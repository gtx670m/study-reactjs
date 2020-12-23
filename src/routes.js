import React from "react";
import WindowWidth from "./components/WindowWidth";
import FormExample from "./components/FormExample";
import ReactBasic from "./components/ReactBasic";
import ReactHook from "./components/ReactHook";

export default [
  {
    path: "/",
    name: "Home",
    component: "hello react!"
  },
  {
    path: "/window-width",
    name: "Window Width",
    component: <WindowWidth />
  },
  {
    path: "/form-example",
    name: "Form Example",
    parent: "Study",
    component: <FormExample />
  },
  {
    path: "/react-basic",
    name: "React Basic",
    parent: "Study",
    component: <ReactBasic />
  },
  {
    path: "/react-hook",
    name: "React Hook",
    parent: "Study",
    component: <ReactHook />
  }
]