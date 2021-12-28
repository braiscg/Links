import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

import SunIcon from "./Icons/SunIcon";
import MoonIcon from "./Icons/MoonIcon";

function Footer() {
    const [theme, setTheme] = React.useState(
        () => document.body.getAttribute("data-theme") ?? "dark"
      );
      React.useEffect(() => {
        document.body.setAttribute("data-theme", theme);
      }, [theme]);
      const handleSwitchTheme = () => {
        setTheme(isDark ? "light" : "dark");
      };
      const isDark = theme === "dark";
    return (
        <div className="Footer container">

            <button className="switch-theme-button" onClick={handleSwitchTheme}>
          {isDark ? <SunIcon color="white" /> : <MoonIcon />}
        </button>
        </div>
    )
}

export default Footer
