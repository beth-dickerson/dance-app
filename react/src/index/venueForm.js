import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class VenueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: ""
    };
    this.handleNameChange=this.handleNameChange.bind(this)
    this.handleAddressChange=this.handleAddressChange.bind(this)
    this.handleFormSubmit=this.handleFormSubmit.bind(this)
    this.handleClearForm=this.handleClearForm.bind(this)
  }

  handleClearForm(event) {
        event.preventDefault();
        this.setState({
            name: "",
            address: ""
        })
    }

  handleNameChange(event) {
      this.setState({ name: event.target.value })
  }

  handleAddressChange(event) {
      this.setState({ address: event.target.value})
  }

  handleClick(event) {
        this.setState({ [event.target.name]: event.target.value })
  }

  validate() {
    let isError = false;
    errors = {};

    if (this.state.name.length < 5) {
      isError = true;
      errors.nameError = "Name needs to be at least 5 characters long";
    }

    if (isError) {
      this.setState({
        ...this.state,
        ...errors
      });
    }

    return isError;
  }

  handleFormSubmit(event) {
      event.preventDefault();

      err = this.validate();
        if (!err) {


      this.setState({
        name: "",
        address: ""
      });
    }
      this.props.onChange({
        name: "",
        address: ""
      })
      this.handleClearForm(event)
  }

  render() {

    return (
      <form>
        <TextField
         name="name"
         hintText="Name"
         floatingLabelText="Name"
         value={this.state.name}
         onChange={this.handleNameChange}
         floatingLabelFixed
        /><br />
        <TextField
         name="address"
         hintText="Address"
         floatingLabelText="Address"
         value={this.state.address}
         onChange={this.handleAddressChange}
         floatingLabelFixed
        /><br />
        <RaisedButton label="Submit"  primary />
      </form>
    );
  }
}

export default VenueForm;
