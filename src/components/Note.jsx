import React from "react";

function Note(props) {

  function handelDelete(){
  //delets the note in the list
  props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handelDelete}>DELETE</button>
    </div>
  );
}

export default Note;
