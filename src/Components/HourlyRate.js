import React from "react";

class HourlyRate extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      localHourlyRate: ""
    };
  }

  hourlyRateHandler = e => {
    this.setState({ localHourlyRate: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const rate = this.state.localHourlyRate;
    this.props.setHourlyRateHandler(rate);
  };

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>
            Hourly Rate
            <input
              type="number"
              name="localHourlyRate"
              value={this.state.localHourlyRate}
              onChange={this.hourlyRateHandler}
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

export default HourlyRate;
