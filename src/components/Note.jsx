import React, { useState } from "react";
import DeleteButton from "../shared/UI/DeleteButton";
import DoneButton from "../shared/UI/DoneButton";

const Note = ({ note, deleteNote }) => {

   let [className, setClassName] = useState('simpleNote');

   function addDoneClass() {
      if (className === "simpleNote") {
         setClassName(className += " done");
      }
   }


   return (
      <div className={className}>
         <p>Id: {note.id}</p>
         <p>Name: {note.name}</p >
         <div className="buttonBlock">
            <DoneButton
               value="Done"
               onClick={addDoneClass}
               className="doneButton" />
            <DeleteButton
               className="deleteNoteButton"
               value="Delete"
               onClick={() => deleteNote(note.id)}
            />
         </div>
      </div >
   )
}

export default Note;
