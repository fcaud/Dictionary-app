import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  const phonetics = props.phonetics;
  const audioElement = new Audio(phonetics.audio);
  return (
    <div className="row">
      <div className="col">
        <button onClick={() => audioElement.play()}>
          <FontAwesomeIcon icon={faVolumeUp} />
        </button>
      </div>
      <div className="col">
        <p>
          <em>{phonetics.text}</em>
        </p>
      </div>
    </div>
  );
}
