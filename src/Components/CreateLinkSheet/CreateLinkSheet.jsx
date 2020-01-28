import React, { useState } from "react";
import CreateLink from "./CreateLink.jsx";
import UpdateLink from "./UpdateLink.jsx";
import "./CreateLinkSheet.css";

const CreateLinkSheet = props => {
  const [key, setKey] = useState(null);

  return (
    <div className="create-link-sheet">
      { !key ? <CreateLink setKey={setKey} /> : <UpdateLink hash={key} />}
    </div>
  );
};

export default CreateLinkSheet;
