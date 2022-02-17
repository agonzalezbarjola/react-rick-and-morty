import React from 'react';
import "./Gallery.scss"


export default function LcGallery({ list }) {
    return (
      <div className="card-wrapper">
        {list.map((item) => (
          <figure key={item.id}>
            <li className="card">
            <img className="cardImage" src="https://c.tenor.com/3hIpHNbcVf4AAAAC/rick-and-morty-rick.gif" alt={item.name} />
  
              <figcaption className="card-info-name">{item.name}</figcaption>
              <figcaption className="card-info-data">
              🪐{item.type}🪐<br></br>
                This location is in the: {item.dimension}
              </figcaption>
            </li>
          </figure>
        ))}
      </div>
    );
  }