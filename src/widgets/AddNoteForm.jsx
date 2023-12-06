import React, { useState } from "react";
import AddNoteButton from "../shared/UI/AddNoteButton";
import ExpireDateInput from "../shared/UI/ExpireDateInput";
import NoteInput from "../shared/UI/NoteInput";

const AddNoteForm = ({ addNote }) => {

   let [inputValue, setInputValue] = useState('');
   let [dateValue, setDateValue] = useState();

   function getNoteInputState(e) {
      inputValue = e.target.value;
      setInputValue(inputValue);
   }

   function addInputValue(e) {
      e.preventDefault();
      if (inputValue !== '') {
         addNote({ name: inputValue, status: false, expirationDate: dateValue });
      }
      setInputValue('');
   }

   function getDateValue(e) {
      let expireDate = (e.target.value)
      expireDate = expireDate.split("-").reverse().join('/')
      setDateValue(expireDate);
   }

   return (
      <form className="addNoteForm">
         <NoteInput
            className="noteInput"
            placeholder="Input new note here..."
            onChange={getNoteInputState}
            value={inputValue} />
         <ExpireDateInput
            onChange={getDateValue}
            className="expireDateInput" />
         <AddNoteButton
            className="addNoteButton"
            value='Add Note'
            onClick={addInputValue} />
      </form>
   )
}

export default AddNoteForm;