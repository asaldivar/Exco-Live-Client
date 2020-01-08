import React, { Component } from 'react';

import TestConnection from '../components/TestConnection';
import MarkAttendance from './MarkAttendance';

class CheckIn extends Component {

  render() {
    return (
      <div>
        <h2 className="text-info">Check In</h2>
        {/* Step 1: test user's internet connection */}
        <TestConnection />

        {/* Step 2: mark user attendance. Also display a list of all other users from the same store of current user.*/}
        {/* <div>
          <p>Please check in any employees who is participating in this live event with you by entering the last 4 digits of their username.</p>
          <MarkAttendance />
        </div> */}

      </div>
    )
  };
};

export default CheckIn;