import React, { Component, Fragment } from 'react';

class Attendee extends Component {
  render() {

    // A label should only display:
    // - Add: when user is not checked in.
    // - Added: when user is already checked in, OR have just been added with matching last 4 digits of username.
    
    // Prompt: Make below dynamic
    const label = 'Add';
    const firstName = 'John';
    const lastName = 'Smith';

    return ( 
      <div className="d-flex align-items-center">
        <div className="d-flex"><strong>{ firstName } { lastName }</strong></div>
        <input className="m-1" style={{ width: '200px'}} placeholder="Last 4 digits of username"></input>
        <button className="btn btn-secondary btn-sm">{label}</button>
      </div>
    )
  }
}

export default Attendee;

