import React from "react";
import { useState } from "react";
import NotesList from "./NotesList";

const ListWindow = (props) => {
   return (
      <div className='listWindow'>
         <h1>To Do List</h1>
         <NotesList notes={props.notes} />
      </div>
   )
}

export default ListWindow;