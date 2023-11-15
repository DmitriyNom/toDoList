import React, { useState } from "react";
import ButtonBlock from "./ButtonBlock";

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
         <ButtonBlock deleteNote={deleteNote} addDoneClass={addDoneClass} note={note} className={className} />
      </div >
   )
}

export default Note;
