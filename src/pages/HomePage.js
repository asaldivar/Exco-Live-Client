import React from 'react';
import { routes } from '../setup/routes';
import { withRouter } from 'react-router-dom';

const HomePage = ({ history }) => {

  const handleLiveEventClick = () => {
    history.push(routes.liveEvent);
  };

  return (
    <div>
      <h1>Expedition Live</h1>
      <h2>Home Page</h2>
      
      <p>Enter a username to log in to the live event as that user:</p>
      <input placeHolder="Enter username "></input>
      <button type="vutton" class="btn btn-primary" onClick={handleLiveEventClick}>Go to Live Event</button>
    </div>
  )
};

export default withRouter(HomePage);