import React, { useState } from "react";
import { createURL, isValidUrl } from "../../api.js";
import "./CreateLinkSheet.css";

const UpdateLink = ({ hash }) => {
  
  const submitHandler = async event => {
    event.preventDefault();

  };

  return (
      <form onSubmit={submitHandler}>
        { hash }
      </form>
  );
};

export default UpdateLink;