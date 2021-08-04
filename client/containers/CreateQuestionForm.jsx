import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

// There will only be one instance of this component on the page
// Requirements: one inherited prop: userId, must interact with DB and consequently update state upon confirmation of successful post to db
const CreateQuestionForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    fetch("/api/questions/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    })
      .then((response) => response.json())
      .then((_result) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
      <li>Question title is: {title} </li>
    </form>
  );
};

export default CreateQuestionForm;
