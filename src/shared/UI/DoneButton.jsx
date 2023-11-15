import React from "react";

const DoneButton = (props) => {
   return (
      <button {...props}>{props.value}</button>
   )
}

export default DoneButton;