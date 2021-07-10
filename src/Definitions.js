import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Synonyms from "./Synonyms.js";
import "./Definitions.css";

export default function Definitions(props) {
  return (
    <div className="Definitions section">
      <h3>{props.definitions.partOfSpeech}</h3>
      {props.definitions.definitions.map(function (meaning, index) {
        return (
          <div key={index} className="sub-section">
            <p>
              <strong>Definition:</strong> {meaning.definition} <br />
              <em>
                <strong>Example:</strong> {meaning.example}
              </em>
            </p>
            <Synonyms synonyms={meaning.synonyms} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
