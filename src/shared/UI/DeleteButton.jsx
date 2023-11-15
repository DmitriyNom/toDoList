import React from "react";

const DeleteButton = (props) => {
   return (
      <button {...props}>{props.value}</button>
   )
}

export default DeleteButton;