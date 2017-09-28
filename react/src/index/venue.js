import React from 'react';

const Venue = (props) => {
  return (
    <div className="Venue">
      <h1>{props.name}</h1>
      <h2>{props.address}</h2>
    </div>
  )
}

export default Venue;
