'use client';

import { useEffect } from 'react';

const Form = () => {
  useEffect(() => {
    fetch('/api/startInterval')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error('Error starting interval:', response.statusText);
        }
      })
      .then((data) => {
        console.log(data.message);
      });
  }, []);

  const handleStartInterval = async () => {
    try {
      const response = await fetch('/api/startInterval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'start' }), // start 요청 보내기
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error starting interval:', error);
    }
  };

  const handleStopInterval = async () => {
    try {
      const response = await fetch('/api/startInterval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'stop' }), // stop 요청 보내기
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error stopping interval:', error);
    }
  };

  return (
    <div>
      <button onClick={handleStartInterval}>Start Interval</button>
      <button onClick={handleStopInterval}>Stop Interval</button>
    </div>
  );
};

export default Form;
