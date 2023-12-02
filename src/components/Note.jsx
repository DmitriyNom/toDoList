import React, { useState } from "react";
import addressList from "../addressList";
import ButtonBlock from "./ButtonBlock";

const Note = ({ note, deleteNote }) => {

   let [className, setClassName] = useState('simpleNote');

   function makeNoteDone() {

      let noteAddress = addressList.get("getAllNotes") + "/" + note.id + "/done";
      console.log(noteAddress);

      fetch(noteAddress, {
         method: "PATCH",
         headers: { "Accept": "application/json" }
      }).then(value => {
         return value.json();
      }).then(value => {
         if (value === "OK") {
            console.log(value);
            addDoneClass();
         }
      })

   }

   function addDoneClass() {
      if (className === "simpleNote") {
         setClassName(className += " done");
      }
   }

   if (note.status === true) {
      addDoneClass();
   }


   return (
      <div className={className}>
         <p>Id: {note.id}</p>
         <p>Name: {note.name}</p >
         <ButtonBlock deleteNote={deleteNote} makeNoteDone={makeNoteDone} note={note} className={className} />
      </div >
   )
}

export default Note;
