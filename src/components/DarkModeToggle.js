import React from "react";
import Toggle from "./Toggle";
import useDarkMode from "use-dark-mode";
import "../css/portfolio.css";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  return (
    <div className="toggleButtonContainer">
      <div className="dropdown dropright">
        <button
          type="button"
          className="btn btn-dark dropdown-toggle"
          data-toggle="dropdown"
        >
          <span className="adjustIcon">
            {" "}
            <i class="fa fa-adjust" aria-hidden="true"></i>
            <span className="theme">Theme</span>
          </span>
        </button>

        <div className="dropdown-menu">
          <button
            className="dropdown-item text-center lightButton"
            type="button"
            onClick={darkMode.disable}
            data-tip
            data-for="lightMode"
          >
            Light
          </button>

          <button
            className="dropdown-item text-center darkButton"
            type="button"
            onClick={darkMode.enable}
            data-tip
            data-for="darkMode"
          >
            Dark
          </button>
        </div>
      </div>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
    </div>
  );
};

export default DarkModeToggle;
