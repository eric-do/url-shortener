import React, { useState, useReducer } from "react";
import "./CreateLinkSheet.css";

const UpdateLink = ({ setInput, name, value }) => {
  const [isActive, setActive] = useState(false);

  const inputHandler = event => {
    const { name, value } = event.target;
    setInput({ [name]: value });
  };

  return (
    <div
      className={
        isActive
          ? `text-field text-field-${name} text-field-active`
          : `text-field text-field-${name} text-field-inactive`
      }
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      <label htmlFor={`${name}-input`} className="text-field-label">
        title
      </label>
      <textarea
        id={`${name}-input`}
        className="text-field-area"
        name="title"
        value={value}
        onChange={inputHandler}
      />
    </div>
  );
};

export default UpdateLink;
