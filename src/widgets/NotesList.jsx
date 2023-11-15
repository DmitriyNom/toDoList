import React from "react";
import Note from "../components/Note";

const NotesList = ({ notes, deleteNote }) => {

   return (
      <div className="notesList">

         {notes.map((note) =>
            <Note note={note} key={note.id} deleteNote={deleteNote} />
         )}

      </div >
   )
}

export default NotesList;