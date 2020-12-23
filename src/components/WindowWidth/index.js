import React from "react";
import { useWindowSize } from "../../utils";

export default function WindowWidth(props) {
  const { windowWidth = 0, windowHeight = 0 } = useWindowSize();
  return (
    <h1>
      {`${windowWidth} x ${windowHeight}`}
    </h1>
  )
}
