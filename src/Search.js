import React, { useState } from "react";

export default function Search() {
  const [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching ${word}`);
  }

  function handleSearchText(event) {
    setWord(event.target.value);
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
    </div>
  );
}
