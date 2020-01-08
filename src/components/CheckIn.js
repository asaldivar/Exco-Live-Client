import React, { Component } from 'react';

import TestConnection from '../components/TestConnection';
import MarkAttendance from './MarkAttendance';

class CheckIn extends Component {

  render() {
    return (
      <div>
        <h3>Check In</h3>
        {/* Step 1: test user's internet connection */}
        {/* <TestConnection /> */}

        {/* Step 2: mark user attendance. Also display a list of all other users from the same store of current user.*/}
        <MarkAttendance />

      </div>
    )
  };
};

export default CheckIn;