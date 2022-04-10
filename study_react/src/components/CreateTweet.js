import React, { useState } from "react";

const CreateTweet = () => {
  const [textInput, setTextInput] = useState("");
  const userInputHandler = (event) => {
    setTextInput(event.target.value);
  };
  return (
    <form>
      <textarea onChange={userInputHandler} cols="50" rows="5"></textarea>
      <button>Submit</button>
      <h1 onClick={() => setTextInput('')}>{textInput}</h1>
    </form>
  );
};

export default CreateTweet;
