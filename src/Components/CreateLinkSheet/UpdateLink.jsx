import React, { useReducer } from "react";
import FormInput from "./FormInput";
import "./CreateLinkSheet.css";

const UpdateLink = ({ hash }) => {
  const initialInput = {
    title: "",
    alias: hash
  };

  const formInputHandler = event => {
    const { name, value } = event.target;
    setFormInput({
      [name]: value
    });
  }

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState
    }),
    initialInput
  );

  const submitHandler = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <FormInput name="title" label="title" value={formInput.title} setInput={formInputHandler} />
      <FormInput name="alias" label="customize back-half" value={formInput.alias} setInput={setFormInput} />
      <input 
          className="submit-button" 
          type="submit" 
          value="save" />
    </form>
  );
};

export default UpdateLink;
