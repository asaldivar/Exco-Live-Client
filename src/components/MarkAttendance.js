import React, { Component } from 'react';

class MarkAttenance extends Component {
  render() {
    return (
      <div>
        <h3>Please check in any employees who is participating in this live event with you.</h3>
        
        {/* Prompt: Display a list of all employees (users) from the same store as current user.
            Allow the user to select any employee from list to check them in.
            If any employee is already checked in, display their status as "Checked In"; they don't have to be checked in again. */}
        <div className="prompt">Insert employee list here.</div>

        <button>Check In User(s)</button>
      </div>
    )
  };
};

export default MarkAttenance;