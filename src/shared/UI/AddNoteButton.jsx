import React from "react";

const AddNoteButton = (props) => {

   return (
      <button type="submit" {...props}>{props.value}</button>
   )
}

export default AddNoteButton;