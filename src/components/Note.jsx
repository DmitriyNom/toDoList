import React, { useState } from "react";
import addressList from "../addressList";
import ButtonBlock from "./ButtonBlock";

const Note = ({ note, deleteNote }) => {

   let [className, setClassName] = useState('simpleNote');

   if (note.status === true) {
      addDoneClass();
   }

   addExpiredClass();

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
         note.status = true;
         setClassName(className += " doneNote");
      }
   }

   function addExpiredClass() {
      let expirationDate;



      if (note.expirationDate != null) {
         let noteArray = note.expirationDate.split("/");
         expirationDate = new Date(noteArray[1] + "/" + noteArray[0] + "/" + noteArray[2]);

         if (new Date() > expirationDate) {

            console.log(new Date())
            console.log(expirationDate)
            if (className === "simpleNote") {
               setClassName(className + " expiredNote")
            }
         }
      }
   }


   return (
      <div className={className}>
         <p>Id: {note.id}</p>
         <p>{note.name}</p>
         <p>{note.status.toString()}</p>
         <ButtonBlock deleteNote={deleteNote} makeNoteDone={makeNoteDone} note={note} className={className} />
      </div >
   )
}

export default Note;
