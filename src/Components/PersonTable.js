import React from "react";

class personTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const people = this.props.people.map((person, key) => (
      <tr key={key}>
        <td data-label="Name">{person.name}</td>
        <td data-label="hoursWorked">{person.hoursWorked}</td>
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

// function personTable(props) {
//   const listPeople = props.people.map((person, key) => (
//     <tr key={key}>
//       <td data-label="Name">{person.name}</td>
//       <td data-label="hoursWorked">{person.hoursWorked}</td>
//     </tr>
//   ));

//   return (
//     <table className="ui celled table">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Hours Per Week</th>
//         </tr>
//       </thead>
//       <tbody>{listPeople}</tbody>
//     </table>
//   );
// }

// export default personTable;
