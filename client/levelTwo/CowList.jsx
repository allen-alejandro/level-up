import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Cow from './Cow.jsx';

const CowList = ({ onDisplayClick, cows }) => {
  const [selectedCow, setSelectedCow] = useState('');

  const handleDisplayClick = (selectedCow) => {
    onDisplayClick(selectedCow);
  };

  return (
    <div>
      {cows.map((cow, i) => (
        <Cow name={cow} handleDisplayClick={handleDisplayClick} key={i} />
      ))}
    </div>
  );
};

export default CowList;
