import React, { useState } from 'react';

const Cow = ({ handleDisplayClick, name }) => {
  const handleDisplayClickHandler = () => {
    handleDisplayClick(name);
  };

  return (
    <div className='cow-details'>
      {name}
      <br></br>
      <button onClick={handleDisplayClickHandler} className='display-button'>
        ✨ Show me off
      </button>
      <br></br>
    </div>
  );
};

export default Cow;
