import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";

export default function Body() {
  const [data, setData] = useState();

  function collectData(e) {
    e.preventDefault();
    fetch("http://localhost:4000/tasks")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <main>
      <h1>YOUR FAVORITE DOG SPOTS, ALL IN ONE PLACE</h1>
      <form onSubmit={(e) => collectData(e)}>
        <input
          id="location-input"
          type="text"
          placeholder="What do we do today?"
        ></input>
        <input
          id="address-input"
          type="text"
          placeholder="Where are you taking me to?"
        ></input>
        <button type="submit" id="search-button">
          <BiSearch id="button-icon" />
        </button>
      </form>
    </main>
  );
}
