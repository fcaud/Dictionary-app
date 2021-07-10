import React from "react";
import Definitions from "./Definitions";
import Phonetics from "./Phonetics";

export default function Results(props) {
  const results = props.results;
  console.log(results.phonetics);

  if (props.results) {
    return (
      <div>
        <h2>{results.word}</h2>
        {results.phonetics.map((phonetics, index) => {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}
        {results.meanings.map((meanings, index) => {
          return (
            <div key={index}>
              <Definitions definitions={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
