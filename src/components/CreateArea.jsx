import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from '@mui/material';



function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpand, setExpand] = useState(false);

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

  function expandArea(){
    setExpand(true);      

  }

  return (
    <div>
      <form className="create-note">
        {isExpand && (<input
          name="title"
          value={note.title}
          onChange={handelChange}
          placeholder="Title"
          
        />)}
        
        <textarea
          name="content"
          value={note.content}
          onChange={handelChange}
          placeholder="Take a note..."
          rows={isExpand? 3 : 1} //intially 1 then 3 when clicked
          onClick={expandArea}
        />
        {/* {isExpand && (<button onClick={submitNote}><AddIcon /></button>)} */}
        <Zoom in={isExpand}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
