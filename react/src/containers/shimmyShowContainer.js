import React from 'react';
import Venue from '../components/venues';
import VenuesContainer from './VenuesContainer';

class ShimmyShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venue: {}
    }
  }

  componentDidMount() {
    fetch(`/api/v1/venues/${this.props.params.id}/`)
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
        venue: body
      })
    } )
    .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  render() {
    return(
      <div>
        <p>hello from show page!</p>
        <VenuesContainer />
        <Venue
          key={this.state.venue.id}
          id={this.state.venue.id}
          name={this.state.venue.name}
          address={this.state.venue.address}

        />
        <iframe width="550" height="473" frameBorder="0" src={`https://www.google.com/maps/embed/v1/search?q=philadelphia%20dancing%20club&key=AIzaSyB5KSiNWNW318XVycsRXfNYFjZNyz4IOa0`} allowFullScreen></iframe>
      </div>
    );
  }
}

export default ShimmyShowContainer;
