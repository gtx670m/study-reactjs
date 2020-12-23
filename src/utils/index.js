import { useEffect, useState } from "react";

export function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })
  return { windowWidth, windowHeight };
}

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => setValue(e.target.value);
  return {
    value,
    onChange: handleChange
  }
}