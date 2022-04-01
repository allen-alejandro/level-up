import React, { useState, useEffect } from 'react';

const Clock = (props) => {
  const [date, setDate] = useState(
    new Date().toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    })
  );
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    let intervalID = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const tick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <div>
      Today is {date} and it is currently {time}
    </div>
  );
};

export default Clock;
