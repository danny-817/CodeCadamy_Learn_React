import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";


export function AddThoughtForm(props) {

const [text, setText] = useState("");

function handleTextChange(event) {
  setText(event.target.value);
}
function handleSubmit(event) {
  event.preventDefault()
  const newThought={
    id:generateId(),
    text:text,
    expiresAt:getNewExpirationTime()
  }
  if(text.length>0){
    props.addThought(newThought)
    setText("");}
}


  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
