import React, { useState } from "react";
import "./CreateLinkSheet.css";

const UpdateLink = ({ setInput, name, value, label, onPaste = () => {} }) => {
  const [isActive, setActive] = useState(false);

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
        { label }
      </label>
      <textarea
        id={`${name}-input`}
        className="text-field-area"
        name={name}
        value={value}
        onPaste={onPaste}
        onChange={setInput}
      />
    </div>
  );
};

export default UpdateLink;
