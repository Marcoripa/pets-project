import React, { useState} from "react";
import Card from "../card/Card";
import Map from "../map/Map";
import {BiSearch} from "react-icons/bi";
import { locations } from "../../locations";

export default function Body() {
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState([30, 2]);
  const [position, setPosition] = useState([])

  function success(position) {
    setCoordinates([position.coords.latitude, position.coords.longitude]);
  }
  navigator.geolocation.getCurrentPosition(success);

  // function collectData(e) {
  //   e.preventDefault();
  //   fetch("http://localhost:4000/tasks")
  //     .then((response) => response.json())
  //     .then((data) =>
  //       setPosition(
  //         data.filter(
  //           (item) => item.Location === location || item.Address === address
  //         )
  //       )
  //     );
  //   setLocation("");
  //   setAddress("");
  // }

  function collectData(e) {
    e.preventDefault()
    setPosition(
      locations.filter(
        (item) => item.name === location || item.address === address
      )
    );
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
      <section className="map-list">
        <Map coordinates={coordinates} position={position} />
        {position === [] ? <h1>Where are we going today?</h1> : 
          <ul className="card-list">
            {position.map(pos => {
            return (
              <Card pos={pos} />
          )
        })}
          </ul>
          }
      </section>
      
    </main>
  );
}
