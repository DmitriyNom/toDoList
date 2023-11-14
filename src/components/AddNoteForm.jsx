import React, { useState } from "react";
import AddNoteButton from "../shared/UI/AddNoteButton";
import NoteInput from "../shared/UI/NoteInput";

const AddNoteForm = ({ addNote, id }) => {

   const [inputValue, setInputValue] = useState('value');

   function getInputState(currentValue) {
      setInputValue(currentValue)
   }

   function addNewNote() {
      let newNote = { id, name: inputValue };
      console.log(newNote);
      addNote(newNote);
   }

   return (
      <form className="addNoteForm">
         <NoteInput getInputState={getInputState} />
         <AddNoteButton addNewNote={addNewNote} />
      </form>
   )
}

export default AddNoteForm;