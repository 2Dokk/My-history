import React, { useState } from "react";

const CreateTweet = ({tweets, setTextInput, setTweets, textInput}) => {
  const userInputHandler = (event) => {
    setTextInput(event.target.value);
  };
  const submitTweetHandler = (event) => {
    event.preventDefault();
    setTweets([...tweets, textInput]);
    setTextInput("");
  };
  return (
    <form onSubmit={submitTweetHandler}>
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
