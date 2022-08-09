import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import { BiSearch } from "react-icons/bi";

export default function Body() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("")
  const [address, setAddress] = useState("")

  function collectData(e) {
    e.preventDefault();
    fetch("http://localhost:4000/tasks")
      .then((response) => response.json())
      .then((data) => setData(data.filter(item => 
        item.Location === location || item.Address === address)
    ))  
    setLocation("")
    setAddress("")
  }

  return (
    <main>
      <h1>YOUR FAVORITE DOG SPOTS, ALL IN ONE PLACE</h1>
      <form onSubmit={(e) => collectData(e)}>
        <input
          id="location-input"
          type="text"
          placeholder="What do we do today?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <input
          id="address-input"
          type="text"
          placeholder="Where are you taking me to?"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        <button type="submit" id="search-button">
          <BiSearch id="button-icon" />
        </button>
      </form>
      {data == null ? <h1>What are you up to today?</h1> : data.map(item => {
        return (
            <Card item={item}/>
        )
      })}
    </main>
  );
}
