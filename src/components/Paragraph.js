import React from "react";

function Paragraph(props) {

  return (
    <p>
      Hola, soy un parrafo! El prop que recibi es {props.myName}
    </p>
  );
}

export default Paragraph;