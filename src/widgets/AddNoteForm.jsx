import React, { useState } from "react";
import AddNoteButton from "../shared/UI/AddNoteButton";
import NoteInput from "../shared/UI/NoteInput";

const AddNoteForm = ({ addNote, id }) => {

   let [inputValue, setInputValue] = useState('');

   function getInputState(e) {
      inputValue = e.target.value;
      setInputValue(inputValue);
   }

   function addInputValue(e) {
      e.preventDefault();
      if (inputValue !== '') {
         addNote({ id, name: inputValue });
      }
      setInputValue('');
   }

   return (
      <form className="addNoteForm">
         <NoteInput
            className="noteInput"
            placeholder="Input new note here..."
            onChange={getInputState}
            value={inputValue} />
         <AddNoteButton
            className="addNoteButton"
            value='Add Note'
            onClick={addInputValue} />
      </form>
   )
}

export default AddNoteForm;