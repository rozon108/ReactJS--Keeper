import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handelChange(event) {
    const {name,value}= event.target;
    setNote(prevVal => {
      return {
        ...prevVal,
        [name]: value
      }
    })
  }

  function submitNote(event){
    props.onAdd(note);
    setNote({
      title: "",
    content: "",
    })
    event.preventDefault();

  }

  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          onChange={handelChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handelChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
