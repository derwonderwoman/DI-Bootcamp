import React from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import Context from "./components/Context";
import "./App.css";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button  className="theme-switcher" onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeSwitcher />
        <Context/>
      </div>
    </ThemeProvider>
  );
}

export default App;
