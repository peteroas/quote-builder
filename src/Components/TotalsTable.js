import React from "react";

class TotalsTable extends React.Component {
  calculateWeeklyHours = people => {
    let totalArray = people.map(person => person.hoursWorked);
    let total = 0;
    for (let num of totalArray) {
      total += num;
    }
    return total;
  };

  calculateTotalHours = weeks => {
    return weeks * this.calculateWeeklyHours(this.props.people);
  };

  calculateWeeklyCost = hours => {
    return hours * this.props.hourlyRate;
  };

  calculateTotalCost = hours => {
    return hours * this.props.hourlyRate * this.props.numWeeks;
  };

  render() {
    const weeklyHours = this.calculateWeeklyHours(this.props.people);
    const totalHours = this.calculateTotalHours(this.props.numWeeks);
    const weeklyCost = this.calculateWeeklyCost(weeklyHours);
    const totalCost = this.calculateTotalCost(weeklyHours);

    return (
      <table className="ui definition table">
        <thead>
          <tr>
            <th />
            <th>Hours</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Weekly</td>
            <td>{weeklyHours} hours</td>
            <td>${weeklyCost}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{totalHours} hours</td>
            <td>${totalCost}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TotalsTable;
