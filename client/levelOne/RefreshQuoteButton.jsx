import React from 'react';

const RefreshQuoteButton = ({ refresh }) => {
  const handleClick = () => {
    refresh();
  };

  return <button onClick={handleClick}>Give me a new quote</button>;
};

export default RefreshQuoteButton;
