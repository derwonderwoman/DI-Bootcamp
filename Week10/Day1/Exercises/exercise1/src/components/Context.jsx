import React from "react";
import {useTheme} from "./ThemeContext"

const Context = () => {
    const { theme } = useTheme();

    return (
      <div className={`content ${theme}`}>
        <h1>Theme Switcher Example</h1>
        <p>Current Theme: {theme}</p>
      </div>
    );
  }

export default Context;