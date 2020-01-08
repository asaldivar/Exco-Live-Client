import React, { Component } from 'react';

class LiveStream extends Component {
  render() {
    return (
      <div>
        {/* Prompt: insert number of total attendees (in real time) */}
        <p>Total numbers of attendees: 0</p>

        {/* Prompt: insert a streaming video player here */}
        <div className="prompt">Insert video player here for streaming content.</div>

        {/* Prompt: on button click, end live event and prompt users to checkout. */}
        <button class="btn btn-outline-primary">End Live Event</button>
      </div>
    )
  };
};

export default LiveStream;