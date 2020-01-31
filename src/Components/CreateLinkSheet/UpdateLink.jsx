import React, { useReducer } from "react";
import FormInput from "./FormInput";
import { updateUrl } from "../../api.js";
import "./CreateLinkSheet.css";

const UpdateLink = ({ hash }) => {
  const initialInput = {
    title: "",
    alias: hash,
    key: hash
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

  const updateUrlCB = (err, doc) => {
    if (err) {
      console.log('Could not update URL');
    } else {
      console.log('Update was successful')
      console.log(doc);
    }
  }

  const submitHandler = event => {
    event.preventDefault();
    updateUrl(formInput, updateUrlCB);
  };

  return (
    <form onSubmit={submitHandler}>
      <FormInput name="title" label="title" value={formInput.title} setInput={formInputHandler} />
      <FormInput name="alias" label="customize back-half" value={formInput.alias} setInput={formInputHandler} />
      <input 
          className="submit-button" 
          type="submit" 
          value="save" />
    </form>
  );
};

export default UpdateLink;
