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
               className="doneButton" />
            <DeleteButton
               className="deleteNoteButton"
               value="Delete"
               onClick={() => deleteNote(note.id)}
            />
         </div>
      )
   } else {
      return (
         <DeleteButton
            className="deleteNoteButton onlyDeleteButton"
            value="Delete"
            onClick={() => deleteNote(note.id)}
         />
      )
   }
}

export default ButtonBlock; 