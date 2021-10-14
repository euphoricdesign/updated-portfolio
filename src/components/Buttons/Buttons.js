import React from "react";
import "./Buttons.scss";

const Buttons = ({ setMode }) => {
  return (
    <div>
      <label>
        <input type="checkbox" />
        <span
          onClick={() =>
            setMode((mode) => (mode === "dark" ? "light" : "dark"))
          }
          className="check"
        ></span>
      </label>
    </div>
  );
};

export default Buttons;
