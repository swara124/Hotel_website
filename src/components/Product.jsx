import React from "react";

export default function Product(props) {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem"}}>
        <img 
          src={props.imgSrc} 
          className="card-img-top" 
          alt="..." 
          style={{ height: "200px", objectFit: "cover" }} 
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-primary">
            {props.btnText}
          </a>
        </div>
      </div>
    </div>
  );
}