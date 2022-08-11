import React from "react";

export default function Card({pos}) {
    return(
       <section className="card" key={pos.id}>
           <div>
              <img></img>
           </div>
           <div>
              <h1>{pos.name}</h1>
              <h3>{pos.address}</h3>
           </div>
       </section>
    )
}