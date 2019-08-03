import React from "react";
import ReactDOM from "react-dom";
import PersonInput from "./Components/PersonInput";
import PersonTable from "./Components/PersonTable";
import HourlyRate from "./Components/HourlyRate";
import TotalsTable from "./Components/TotalsTable";
import NumWeeks from "./Components/NumWeeks";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: "Peter", hoursWorked: 40 },
        { name: "George", hoursWorked: 35 }
      ],
      hourlyRate: 0,
      numWeeks: 0
    };
    this.personAddedHandler = this.personAddedHandler.bind(this);
    this.setHourlyRateHandler = this.setHourlyRateHandler.bind(this);
    this.setNumWeeksHandler = this.setNumWeeksHandler.bind(this);
  }

  personAddedHandler(person) {
    const newList = [...this.state.people, person];
    this.setState({
      people: newList
    });
  }

  setHourlyRateHandler(hourlyRate) {
    this.setState({ hourlyRate: hourlyRate });
  }

  setNumWeeksHandler(numWeeks) {
    this.setState({ numWeeks: numWeeks });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>This React Project</h1>
        </header>
        <PersonInput
          newPerson={this.state.newPerson}
          personAddedHandler={this.personAddedHandler}
        />
        <PersonTable people={this.state.people} />
        <HourlyRate
          hourlyRate={this.state.hourlyRate}
          setHourlyRateHandler={this.setHourlyRateHandler}
        />
        <NumWeeks
          numWeeks={this.state.numWeeks}
          setNumWeeksHandler={this.setNumWeeksHandler}
        />
        <TotalsTable
          people={this.state.people}
          hourlyRate={this.state.hourlyRate}
          numWeeks={this.state.numWeeks}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
