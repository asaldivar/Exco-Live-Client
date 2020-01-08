import React, { Component } from 'react';
import AttendeeList from './AttendeeList';

// Note: this component could be used for both Check In and Check Out.
class MarkAttenance extends Component {
  render() {
    return (
      <div>
        <h3>Please check in/out any employees who is participating in this live event with you by entering the last 4 digits of their username.</h3>
        <AttendeeList />

        {/* Prompt: on button click, check in all selected user(s) and send check in/out timestamp to database.
            Only save the first occuring timestamp for both check in and check out*/}
        <button>Check In/Out User(s)</button>
      </div>
    )
  };
};

export default MarkAttenance;