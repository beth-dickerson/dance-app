import React, { Component } from 'react';
import Venue from './venue';
import VenueForm from '../index/venueForm';
import { Link } from 'react-router';
import update from 'immutability-helper';
import axios from 'axios';
// import ShimmyShowContainer from './shimmyShowContainer';


class ShimmyIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      fields: {}
    }
  }

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    })
  }

  componentDidMount() {
    fetch('/api/v1/places')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(body => {

      this.setState({
        venues: body.results
      })
    } )
    .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  render() {

    let placeComponent =
      this.state.venues.map((venue) => {

        return(
          <div>
            <Venue
              key={venue.id}
              id={venue.id}
              name={venue.name}

            />
          </div>
        )
      })

    return (
      <div>
        <h1>hello from index page</h1>
        {placeComponent}
        <iframe width="550" height="473" frameBorder="0" src={`https://www.google.com/maps/embed/v1/search?q=philadelphia%20dancing%20club&key=AIzaSyB5KSiNWNW318XVycsRXfNYFjZNyz4IOa0`} allowFullScreen></iframe>
        <VenueForm />
      </div>
    );
  }
}

export default ShimmyIndexContainer;
