import React from "react";
import Definitions from "./Definitions";

export default function Results(props) {
  const results = props.results;

  if (props.results) {
    return (
      <div>
        <h2>{results.word}</h2>
        {results.meanings.map(function (meanings, index) {
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
