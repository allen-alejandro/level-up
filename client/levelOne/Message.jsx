import React, { useState, useEffect } from 'react';
import RefreshQuoteButton from './RefreshQuoteButton.jsx';

const Message = ({ samplePhrases }) => {
  const [message, setMessage] = useState('');

  const refreshQuote = () => {
    let randomIndex = Math.floor(Math.random() * samplePhrases.length);
    setMessage(samplePhrases[randomIndex]);
  };

  useEffect(refreshQuote);

  return (
    <div className='message'>
      {message}
      <RefreshQuoteButton refresh={refreshQuote} />
    </div>
  );
};

export default Message;
