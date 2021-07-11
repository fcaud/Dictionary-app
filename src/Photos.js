import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos section">
        <div className="row">
          {props.photos.map((photo, index) => {
            return (
              <div key={index} className="col">
                <img src={photo.src.tiny} alt={photo.url}></img>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
