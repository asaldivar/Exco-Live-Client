import React, { Component } from 'react';
import MarkAttendance from './MarkAttendance';
class CheckOut extends Component {
  render() {
    return (
      <div>
        <h3>Check Out</h3>
        <MarkAttendance />
      </div>
    )
  };
};

export default CheckOut;