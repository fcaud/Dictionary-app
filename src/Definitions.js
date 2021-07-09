import React from "react";

export default function Definitions(props) {
  return (
    <div>
      <h3>{props.definitions.partOfSpeech}</h3>
      {props.definitions.definitions.map(function (meaning, index) {
        return (
          <div key={index}>
            <p>
              {meaning.definition} <br />
              <em>Example: {meaning.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
