import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  if (!time) {
    return <div className="clock">Loading...</div>;
  }

  const torontoTime = new Date(
    time.toLocaleString('en-US', { timeZone: 'America/Toronto' })
  );

  const formattedTime = torontoTime
    .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return <div className="clock">{formattedTime} (Toronto Time)</div>;
};

export default Clock;
