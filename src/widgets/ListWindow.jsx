import React from "react";
import NotesList from "../components/NotesList";

const ListWindow = (props) => {

   return (
      <div className='listWindow'>
         <h1>To Do List</h1>
         <NotesList notes={props.notes} deleteNote={props.deleteNote} />
      </div>
   )
}

export default ListWindow;