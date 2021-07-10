import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms row">
        <div className="col">
          <strong>Synonyms:</strong>
        </div>
        {props.synonyms.map(function (synonym, index) {
          return (
            <div className="col" key={index}>
              {synonym}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
