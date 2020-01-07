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
      
      <button onClick={handleLiveEventClick}>Go to Live Event</button>
    </div>
  )
};

export default withRouter(HomePage);