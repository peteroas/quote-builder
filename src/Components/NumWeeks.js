import React from "react";

class NumWeeks extends React.Component {
  constructor(props) {
    super(props);
    this.numWeeksHandler = this.numWeeksHandler.bind(this);
    this.state = {
      localNumWeeks: ""
    };
  }

  numWeeksHandler = e => {
    e.preventDefault();
    this.setState({ localNumWeeks: e.target.value });
    const numWeeks = this.state.localNumWeeks;
    this.props.setNumWeeksHandler(numWeeks);
  };

  submitHandler = e => {
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
      </form>
    );
  }
}

export default NumWeeks;
