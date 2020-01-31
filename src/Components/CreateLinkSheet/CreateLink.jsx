import React, { useState } from "react";
import UrlValidationIcon from "./UrlValidationIcon.jsx";
import { createURL, isValidUrl } from "../../api.js";
import FormInput from "./FormInput.jsx";
import "./CreateLinkSheet.css";

const CreateLink = ({ setKey }) => {
  const [url, setUrl] = useState("");
  const [isValid, setValid] = useState(null);

  const urlInputHandler = event => {
    const url = event.target.value;
    setValid(isValidUrl(url));
    setUrl(url);
  };

  const setKeyCB = (err, key) => {
    if (err) {
      console.log('Error creating key');
      setKey(null)
    } else {
      setKey(key);
    }
  }

  const urlPasteHandler = event => {
    const value = event.clipboardData.getData('text');
    setTimeout(() => {
      setUrl(value);
      createURL(value, setKeyCB);
    }, 500);
  };

  const submitHandler = async event => {
    event.preventDefault();
    createURL(url, setKeyCB);
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
