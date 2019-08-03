import React from "react";

class PersonInput extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      name: "",
      hoursWorked: ""
    };
  }

  nameHandler = e => {
    this.setState({ name: e.target.value });
  };

  hoursWorkedHandler = e => {
    this.setState({ hoursWorked: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const newPerson = {
      name: this.state.name,
      hoursWorked: parseInt(this.state.hoursWorked)
    };
    this.props.personAddedHandler(newPerson);
    this.setState({
      name: "",
      hoursWorked: ""
    });
  };

  render() {
    return (
      <form className="ui form">
        <div className="fields">
          <div className="field">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.nameHandler}
              />
            </label>
          </div>
          <div className="field">
            <label>
              Hours Per Week:
              <input
                type="number"
                name="hoursWorked"
                value={this.state.hoursWorked}
                onChange={this.hoursWorkedHandler}
              />
            </label>
          </div>
        </div>
        <button className="ui button" onClick={this.submitHandler}>
          Submit
        </button>
      </form>
    );
  }
}

export default PersonInput;
