import React from "react";
import Image from 'react-bootstrap/Image';
function Card(props) {
  return (
    <div className="card text-center text-dark bg-light m-3">
      <div className="card-header text-left">
        <strong>{props.heading}: </strong>
      </div>
      <Image src={props.imageUrl} />
      <div className="card-body ">{props.children}</div>
    </div>
  );
}

export default Card;