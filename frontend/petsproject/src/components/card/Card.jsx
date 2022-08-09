import React from "react";

export default function Card({item}) {
    return(
       <section className="card" key={item.id}>
           <div>
              <img></img>
           </div>
           <div>
              <h1>{item.Location}</h1>
              <h3>{item.Address}</h3>
           </div>
       </section>
    )
}