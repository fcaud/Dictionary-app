import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";
import Photos from "./Photos";

export default function Search() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");
  const [photos, setPhotos] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    callApi(word);
  }

  function callApi(searchWord) {
    // dictionary documentation: https://dictionaryapi.dev/
    const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${searchWord}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryApiCall);

    // pexels documentation: https://www.pexels.com/api/documentation/
    const pexelsApiKey = `563492ad6f917000010000012f6032e5112141c88138315a0be925c6`;
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchWord}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsApiCall);
  }

  function handleSearchText(event) {
    setWord(event.target.value);
  }

  function handleDictionaryApiCall(response) {
    setResult(response.data[0]);
  }

  function handlePexelsApiCall(response) {
    setPhotos(response.data.photos);
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

      <Photos photos={photos} />
    </div>
  );
}
