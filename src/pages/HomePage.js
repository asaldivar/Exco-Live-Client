import React from 'react';
import { routes } from '../setup/routes';
import { withRouter } from 'react-router-dom';

const HomePage = ({ history }) => {

  const handleLiveEventClick = () => {
    // Prompt: Use the entered username to retrieve that user's information.
    // If found, persist user data to for remainder duration of live event, then redirect to Live Event Page.
    // Do not proceed if no match is found.
    history.push(routes.liveEvent);
  };

  return (
    <div className="m-5">
      <h2 className="text-info">Home Page</h2>
      <p>Enter a username to log in to the live event as that user:</p>
      <div className="d-flex align-items-center">
        <input className="mr-2" placeholder="Enter username"/>
        <button type="button" className="btn btn-outline-primary" onClick={handleLiveEventClick}>Go to Live Event</button>
      </div>
    </div>
  )
};

export default withRouter(HomePage);