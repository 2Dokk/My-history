import React, { useState } from "react";

const CreateTweet = () => {
  const [textInput, setTextInput] = useState("");
  const userInputHandler = (event) => {
    setTextInput(event.target.value);
  };
  return (
    <form>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="50"
        rows="5"
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
