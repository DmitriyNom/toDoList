import React from "react";
import Note from "./Note";

const NotesList = (props) => {

   return (
      <div className="notesList">

         {props.notes.map((note) =>
            <Note note={note} key={note.id} deleteNote={props.deleteNote} />
         )}

      </div >
   )
}

export default NotesList;