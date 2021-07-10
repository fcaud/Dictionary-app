import React from "react";
import Definitions from "./Definitions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default function Results(props) {
  const results = props.results;

  if (props.results) {
    return (
      <div>
        <h2>{results.word}</h2>
        {results.phonetics.map((phonetics, index) => {
          const audioElement = new Audio(phonetics.audio);
          return (
            <div key={index}>
              <button onClick={() => audioElement.play()}>
                <FontAwesomeIcon icon={faVolumeUp} />
              </button>
              <p>
                <em>{phonetics.text}</em>
              </p>
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
