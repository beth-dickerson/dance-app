import React from 'react';
import Venue from '../components/venues';

class VenueShowContainer extends React.Component {
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
        <Venue
          key={this.state.venue.id}
          id={this.state.venue.id}
          photo={this.state.venue.photo}
          name={this.state.venue.name}
          description={this.state.venue.description}
          email={this.state.venue.email}
          neighborhood={this.state.venue.neighborhood}
          phone={this.state.venue.phone}
          url={this.state.venue.url}
        />
      </div>
    );
  }
}

export default VenueShowContainer;
