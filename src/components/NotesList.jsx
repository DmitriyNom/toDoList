import React from "react";
import Note from "./Note";

const NotesList = (props) => {

   return (
      <div className="notesList">

         {props.notes.map((note) =>
            <Note note={note} key={Math.random() * 100} deleteNote={props.deleteNote} />
         )}

      </div >
   )
}

export default NotesList;