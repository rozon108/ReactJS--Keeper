import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const DeleteItt =<DeleteForeverIcon sx={ {color: '#a40000'}} fontSize="medium" />

function Note(props) {

  function handelDelete(){
  //delets the note in the list
  props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handelDelete}>{DeleteItt}</button>
    </div>
  );
}

export default Note;
