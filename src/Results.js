import React from "react";
import Definitions from "./Definitions";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  const results = props.results;

  if (props.results) {
    return (
      <div className="Results">
        <div className="section">
          <h2>{results.word}</h2>
          {results.phonetics.map((phonetics, index) => {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </div>
        {results.meanings.map((meanings, index) => {
          return (
            <div key={index}>
              <Definitions
                definitions={meanings}
                synonymLookUp={props.synonymLookUp}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
