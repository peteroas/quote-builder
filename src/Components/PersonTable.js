import React from "react";

class personTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const people = this.props.people.map((person, key) => (
      <tr key={key}>
        <td>{person.name}</td>
        <td>{person.hoursWorked}</td>
      </tr>
    ));

    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Hours Per Week</th>
          </tr>
        </thead>
        <tbody>{people}</tbody>
      </table>
    );
  }
}

export default personTable;
