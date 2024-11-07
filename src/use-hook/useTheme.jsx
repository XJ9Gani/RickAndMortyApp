import { useState, useEffect } from "react";

export default function useTheme() {
  const [state, setState] = useState(localStorage.getItem("state") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", state);
    localStorage.setItem("state", state);
  }, []);

  const handleState = () => {
    const nextState = state === "light" ? "dark" : "light";
    localStorage.setItem("state", nextState);
    document.documentElement.setAttribute("data-bs-theme", nextState);
    setState(nextState);
  };

  return [state, handleState];
}
