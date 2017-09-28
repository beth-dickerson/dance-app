import React, { Component } from 'react';
import Venues from './Venues';
import update from 'immutability-helper';
import axios from 'axios';
import venuePost from './venuePost';

class VenuesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      editingVenueId: null,
      notification: " "
    }
  }

  componentDidMount() {
    axios.get('/api/v1/venues.json')
      .then(response => {
      console.log(response)
      this.setState({venues: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewVenue = () => {
    axios.post('/api/v1/venues',
      { venue:
        {
          name: '',
          address: ''
        }
      }
    )
    .then(response => {
      console.log(response)
      const venues = update(this.state.venues, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        venues: venues,
        editingVenueId: response.data.id})
    })
    .catch(error => console.log(error))
  }

  updateVenue = (venue) => {
    const venueIndex = this.state.venues.findIndex(x => x.id === venue.id)
    const venues = update(this.state.venues, {
      [venueIndex]: { $set: venue }
    })
    this.setState({
      venues: venues,
      notification: 'All changes saved'
    })
  }

  resetNotification = () => {
    this.setState({notification: ""})
  }

  enableEditing = (id) => {
    this.setState({editingVenueId: id}, () => { this.name.focus() })
  }

  deleteVenue = (id) => {
    axios.delete(`/api/v1/venues/${id}`)
    .then(response => {
      const venueIndex = this.state.venues.findIndex(x => x.id === id)
      const venues = update(this.state.venues, { $splice: [[venueIndex, 1]]})
      this.setState({venues: venues})
    })
    .catch(error => console.log(error))
  }

  render() {
    return(
      <div className= "view">

      <button className="newVenueButton"
        onClick={this.addNewVenue} >
        New Venue
      </button>
      <span className="notification">
        {this.state.notification}
      </span>
      {this.state.venues.map((venue) => {
        if(this.state.editingVenueId === venue.id) {
          return(
            <VenuePost
              venue={venue}
              key={venue.id}
              updateVenue={this.updateVenue}
              titleRef= {input => this.title = input}
              resetNotification={this.resetNotification} />)
        } else {
          return(
            <Venues
              venue={venue}
              key={venue.id}
              onClick={this.enableEditing}
              onDelete={this.deleteVenue}
            />)
        }
      })}
      <iframe width="550" height="473" frameBorder="0" src={`https://www.google.com/maps/embed/v1/search?q=philadelphia%20dancing%20club&key=AIzaSyB5KSiNWNW318XVycsRXfNYFjZNyz4IOa0`} allowFullScreen></iframe>
      </div>
    );
  }
}

export default VenuesContainer;
