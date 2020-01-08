import React, { Component } from 'react';

const MIN_SPEED_REQUIREMENT = 500; // in kbps
const IMAGE_URL = null; // Prompt: insert your uploaded image url for testing here.
const DOWNLOAD_SIZE = 0; // Prompt: update download size of the uploaded image.
const TESTING_TOTAL = 3;

class TestConnection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      internetSpeed: 0,
      totalSpeed: 0,
      passedConnectionTest: false,
    };
  }

  testConnection = async () => {
    await this.checkBandwidth();

    const { internetSpeed, totalSpeed } = this.state;
    const connectionResult = {
        total_bandwidth_used_kb: totalSpeed,
        average_bandwidth_kbps: internetSpeed,
    }

    // Prompt: console log the connectionResult object.
    console.log('Test connection result: ', connectionResult);
  }

  async checkBandwidth() {
    let sumSpeed = 0;
    let averageSpeed = 0;

    for (let i = 0; i < TESTING_TOTAL; i++) {
        sumSpeed += await this.loadImageProcess();
    }

    averageSpeed = sumSpeed/TESTING_TOTAL;

    this.setState({ totalSpeed: sumSpeed.toFixed(0), internetSpeed: averageSpeed.toFixed(0), passedConnectionTest: averageSpeed > MIN_SPEED_REQUIREMENT });
  }

  loadImageProcess() {
    return new Promise((resolve, reject) => {
      const download = new Image();
      const startTime = (new Date()).getTime();
      download.src = IMAGE_URL + "?n=" + Math.random();
      
      download.onload = async() => {
        const endTime = (new Date()).getTime();
        const duration = (endTime - startTime) / 1000;
        const bitsLoaded = DOWNLOAD_SIZE * 8;
        const speed = (bitsLoaded / duration) / 1024;
        resolve(speed);
      };
    });
  };

  render() {
    return (
      <div>
        <p>Please test your internet connection.</p>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={this.testConnection}>
            Test Connection
        </button>

        {/* Prompt: should test connection pass, allow user to move to next screen and check in */}
        {/* You are not required to handle failed connection test. */}
        <div className="prompt">Display confirmation once a user has passed the connection test and introduce a CTA button that takes user to step 2.</div>
      </div>
    )
  };
};

export default TestConnection;