import React, { useState, useReducer } from "react";
import { createURL, isValidUrl } from "../../api.js";
import FormInput from "./FormInput";
import "./CreateLinkSheet.css";

const UpdateLink = ({ hash }) => {
  const initialInput = {
    title: "",
    alias: hash
  };

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState
    }),
    initialInput
  );

  const [activeInputs, setActiveInputs] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState
    }),
    {
      title: false,
      alias: false
    }
  );

  const inputHandler = event => {
    const { name, value } = event.target;
    setFormInput({ [name]: value });
  };

  const submitHandler = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={
          activeInputs.title
            ? "text-field text-field-title text-field-active"
            : "text-field text-field-title text-field-inactive"
        }
        onFocus={() => setActiveInputs({ title: true })}
        onBlur={() => setActiveInputs({ title: false })}
      >
        <label htmlFor="title-input" className="text-field-label">
          title
        </label>
        <textarea
          id="title-input"
          className="text-field-area"
          name="title"
          value={formInput.title}
          onChange={inputHandler}
        />
      </div>
      <div
        className={
          activeInputs.alias
            ? "text-field text-field-title text-field-active"
            : "text-field text-field-title text-field-inactive"
        }
        onFocus={() => setActiveInputs({ alias: true })}
        onBlur={() => setActiveInputs({ alias: false })}
      >
        <label htmlFor="alias-input" className="text-field-label">
          customize back-half
        </label>
        <textarea
          id="alias-input"
          className="text-field-area"
          name="alias"
          value={formInput.alias}
          onChange={inputHandler}
        />
      </div>
      <div className="submit-container">
          <input className="submit-button" type="submit" value="save" />
        </div>
    </form>
  );
};

export default UpdateLink;
