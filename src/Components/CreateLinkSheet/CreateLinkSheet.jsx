import React, { useState } from "react";
import UrlValidationIcon from "./UrlValidationIcon.jsx";
import { createURL, isValidUrl } from "../../api.js";
import "./CreateLinkSheet.css";

const CreateLinkSheet = props => {
  const [url, setUrl] = useState("");
  const [isValid, setValid] = useState(null);

  const urlInputHandler = event => {
    const url = event.target.value;

    setValid(isValidUrl(url));
    setUrl(url);
  };

  const urlPasteHandler = event => {
    setUrl(event.target.value);
    createURL(url, () => console.log("finished"));
  };

  const submitHandler = event => {
    event.preventDefault();
    createURL(url, () => console.log("finished"));
  };

  return (
    <div className="create-link-sheet">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-field"
          placeholder="test"
          value={url}
          onPaste={urlPasteHandler}
          onChange={urlInputHandler}
        />
        <UrlValidationIcon isValid={isValid} />
        <input type="submit" value="CREATE" />
      </form>
    </div>
  );
};

export default CreateLinkSheet;
