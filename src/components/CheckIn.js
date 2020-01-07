import React, { Component } from 'react';

import TestConnection from '../components/TestConnection';
import MarkAttendance from './MarkAttendance';

class CheckIn extends Component {

  render() {
    return (
      <div>
        {/* Step 1: test user's internet connection */}
        <TestConnection />

        {/* Step 2: Mark attenance for user. Display list of all other users from the same store of current user.*/}
        <MarkAttendance />

      </div>
    )
  };
};

export default CheckIn;