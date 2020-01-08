import React, { Component } from 'react';
import Attendee from './Attendee';

// Note: this component is used for both Check In and Check Out process.
class AttendeeList extends Component {
  render() {
    return (
      <div>
        {/* Prompt: Display a list of all employees (users) from the same store as current user.
            Allow the user to select any employee from list to check them in/out; to select an employee, user has to enter the last 4 digits of their username and press "Add".
            A user can only be added when if the values match what is in the db. */}
        <div className="prompt">Make attendee list dynamic below.</div>
        
        {/* Dummy List: */}
        <Attendee />
        <Attendee />
        <Attendee />    

      </div>
    )
  };
};

export default AttendeeList;