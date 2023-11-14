import React from "react";

const AddNoteButton = ({ addNewNote }) => {

   function addNote(e) {
      e.preventDefault();
      addNewNote();
   }

   return (
      <input type="submit" className="addNoteButton" value='Add Note' onClick={addNote} />
   )
}

export default AddNoteButton;