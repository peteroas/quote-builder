import React from "react";

class NumWeeks extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      localNumWeeks: ""
    };
  }

  numWeeksHandler = e => {
    this.setState({ localNumWeeks: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const numWeeks = this.state.localNumWeeks;
    this.props.setNumWeeksHandler(numWeeks);
  };

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>
            Number of Weeks
            <input
              type="number"
              name="localNumWeeks"
              value={this.state.localNumWeeks}
              onChange={this.numWeeksHandler}
            />
          </label>
        </div>
        <button className="ui button" onClick={this.submitHandler}>
          Submit
        </button>
      </form>
    );
  }
}

export default NumWeeks;
