import React, { Component } from 'react';

// Components
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import LiveStream from '../components/LiveStream';

class LiveEventPage extends Component {
  render() {
    return (
      <div className="m-5">
        {/* Here are the 3 stages of a live event. Please manage state according to prompt. */}
        <CheckIn />
        {/* <LiveStream /> */}
        {/* <CheckOut /> */}

      </div>
    )
  };
};

export default LiveEventPage;