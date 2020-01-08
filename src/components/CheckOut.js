import React, { Component } from 'react';
import MarkAttendance from './MarkAttendance';
class CheckOut extends Component {
  render() {
    return (
      <div>
        <h2 className="text-info">Check Out</h2>
        <p>Please check out any employees who is participating in this live event with you by entering the last 4 digits of their username.</p>
        <MarkAttendance />
      </div>
    )
  };
};

export default CheckOut;