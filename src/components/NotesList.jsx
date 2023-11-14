import React from "react";
import Note from "../shared/UI/Note";

const NotesList = ({ notes }) => {

   return (
      <div className="notesList">

         {notes.map((note) =>
            <Note note={note} />
         )}

      </div >
   )
}

export default NotesList;