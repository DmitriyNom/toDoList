import React, { useState } from "react";

const NoteInput = ({ getInputState }) => {

   let [inputValue, setInputValue] = useState('');

   function getInputValue(e) {
      inputValue = e.target.value;
      setInputValue(e.target.value);
      getInputState(inputValue);
   }


   return (
      <input type="text" className="noteInput" placeholder="Input new note here..." onChange={getInputValue} />
   )

}

export default NoteInput;