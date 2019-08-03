import React from "react";

class HourlyRate extends React.Component {
  constructor(props) {
    super(props);
    this.hourlyRateHandler = this.hourlyRateHandler.bind(this);
    this.state = {
      localHourlyRate: ""
    };
  }

  hourlyRateHandler = e => {
    e.preventDefault();
    this.setState({ localHourlyRate: e.target.value });
    const rate = this.state.localHourlyRate;
    this.props.setHourlyRateHandler(rate);
  };

  submitHandler = e => {};

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
      </form>
    );
  }
}

export default HourlyRate;
