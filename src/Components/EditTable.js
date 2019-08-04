import React from "react";

class EditTable extends React.Component {}

render() {
  return (
    <tr>
      <td>
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
      </td>
      <td >
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
      </td>
    </tr>
  )
}

export default EditTable;
