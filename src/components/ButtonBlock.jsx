import React from "react";
import DeleteButton from "../shared/UI/DeleteButton";
import DoneButton from "../shared/UI/DoneButton";

const ButtonBlock = ({ note, deleteNote, addDoneClass, className }) => {

   if (className === "simpleNote") {

      return (
         <div className="buttonBlock">
            <DoneButton
               value="Done"
               onClick={addDoneClass}
               className="button doneButton" />
            <DeleteButton
               className="button deleteNoteButton"
               value="Delete"
               onClick={() => deleteNote(note.id)}
            />
         </div>
      )
   } else {
      return (
         <DeleteButton
            className="button deleteNoteButton onlyDeleteButton"
            value="Delete"
            onClick={() => deleteNote(note.id)}
         />
      )
   }
}

export default ButtonBlock; 