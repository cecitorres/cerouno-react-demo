import React from "react";

function ContactCard(props) {
  return (
    <div>
      <img src={props.imgUrl} alt="Not found"/>
      <h2>{props.name}</h2>
      <p>Telefono: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default ContactCard;