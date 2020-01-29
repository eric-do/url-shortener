import React, { useState } from "react";
import UrlValidationIcon from "./UrlValidationIcon.jsx";
import { createURL, isValidUrl } from "../../api.js";
import FormInput from "./FormInput.jsx";
import "./CreateLinkSheet.css";

const CreateLink = ({ setKey }) => {
  const [url, setUrl] = useState("");
  const [isValid, setValid] = useState(null);
  const [isActive, setActive] = useState(false);

  const urlInputHandler = event => {
    const url = event.target.value;
    setValid(isValidUrl(url));
    setUrl(url);
  };

  const urlPasteHandler = event => {
    const value = event.clipboardData.getData('text');
    setTimeout(() => {
      setUrl(value);
      createURL(value, key => setKey(key));
    }, 500);
  };

  const submitHandler = async event => {
    event.preventDefault();
    createURL(url, key => setKey(key));
  };

  return (
    <form onSubmit={submitHandler}>
      <FormInput
        setInput={urlInputHandler}
        name="url"
        value={url}
        label="paste long url"
        onPaste={urlPasteHandler}
      />
      <UrlValidationIcon isValid={isValid} />
      <div className="submit-container">
        <input 
          className="submit-button" 
          type="submit" 
          value="CREATE" />
      </div>
    </form>
  );
};

export default CreateLink;
