import React, { Component } from 'react';

class LiveStream extends Component {
  render() {
    return (
      <div>
        {/* Prompt: insert number of total attendees (in real time) */}
        <div>Total numbers of attendees: 0</div>

        {/* Prompt: insert a streaming video player here */}
        <div className="prompt">Insert streaming video player here.</div>

        {/* Prompt: on button click, end live event and prompt users to checkout. */}
        <button>End Live Event</button>
      </div>
    )
  };
};

export default LiveStream;