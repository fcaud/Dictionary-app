import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms row">
        <div className="col description">
          <strong>Synonyms:</strong>
        </div>
        {props.synonyms.map(function (synonym, index) {
          return (
            <div className="col-2" key={index}>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  props.synonymLookUp(synonym);
                }}
              >
                {synonym}
              </button>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
