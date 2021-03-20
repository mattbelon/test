import React from 'react';

function FullCard({city, country, num}){
    return(
        <div className="card">
        <div className="card-header">
    Profile
  </div>
        <ul className="list-group list-group-flush">
    <li className="list-group-item">Country: {country}</li>
    <li className="list-group-item">City: {city}</li>
    <li className="list-group-item">Contact Phone: {num}</li>
  </ul>
  </div>        
    )
}

export default FullCard;
