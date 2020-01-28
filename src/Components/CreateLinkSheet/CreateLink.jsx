import React, { useState } from "react";
import UrlValidationIcon from "./UrlValidationIcon.jsx";
import { createURL, isValidUrl } from "../../api.js";
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
    setUrl(event.target.value);
    createURL(url, () => console.log("finished"));
  };

  const submitHandler = async event => {
    event.preventDefault();
    createURL(url, key => setKey(key));
  };

  return (
      <form onSubmit={submitHandler}>
        <div
          className={isActive ? "text-field text-field-url text-field-active" : "text-field text-field-url text-field-inactive"}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        >
          <label htmlFor="url-input" className="text-field-label">paste long url</label>
          <textarea
            id="url-input"
            className="text-field-area"
            value={url}
            onPaste={urlPasteHandler}
            onChange={urlInputHandler}
            placeholder="enter"
          />
        </div>
        <UrlValidationIcon isValid={isValid} />
        <div className="submit-container">
          <input className="submit-button" type="submit" value="CREATE" />

        </div>
      </form>
  );
};

export default CreateLink;