import React from "react";

const Note = ({ note }) => {

   console.log(note);
   return (
      <div className="simpleNote">
         <p>Id: {note.id}</p>
         <p>Name: {note.name}</p >
      </div >
   )
}

export default Note;
