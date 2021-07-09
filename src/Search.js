import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${word}`;
    axios.get(apiUrl).then(handleApiCall);
  }

  function handleSearchText(event) {
    setWord(event.target.value);
  }

  function handleApiCall(response) {
    setResult(response.data[0]);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter word..."
          onChange={handleSearchText}
        ></input>
        <input type="submit"></input>
      </form>
      <Results results={result} />
    </div>
  );
}
