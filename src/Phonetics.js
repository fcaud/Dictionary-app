import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  const audioElement = new Audio(props.phonetics.audio);
  return (
    <div className="row">
      <div className="col">
        <button onClick={() => audioElement.play()}>
          <FontAwesomeIcon icon={faVolumeUp} />
        </button>
      </div>
      <div className="col">
        <p>
          <em>{props.phonetics.text}</em>
        </p>
      </div>
    </div>
  );
}
