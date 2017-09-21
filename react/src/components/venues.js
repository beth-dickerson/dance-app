import React from 'react';

const Venue = (props) => {
  return (
    <div>
      <p>{props.photo}</p>
      <h1>{props.name}</h1><br />
      <h2>{props.description}</h2><br />
      <h4>{props.email}</h4>
      <h4>{props.neighborhood}</h4>
      <h4>{props.phone}</h4>
      <h4>{props.url}</h4>
    </div>
  )
}

export default Venue;
