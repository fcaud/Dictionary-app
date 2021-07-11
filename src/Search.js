import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";

export default function Search() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    callApi(word);
  }

  function callApi(searchWord) {
    // documentation: https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${searchWord}`;
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
      <div className="section">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter word..."
            onChange={handleSearchText}
            className="search-input"
          ></input>
          <input type="submit" className="submit-button"></input>
        </form>
      </div>
      <Results
        results={result}
        synonymLookUp={(synonym) => {
          callApi(synonym);
        }}
      />
    </div>
  );
}
