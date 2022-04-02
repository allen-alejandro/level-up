import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CowView = ({ onDeleteClick, cow }) => {
  const [updatedDescription, setUpdatedDescription] = useState('');

  const handleDeleteClick = () => {
    onDeleteClick(cow);
  };

  return (
    <div>
      <div className='cow-details'>
        <h3>{cow}</h3>
      </div>
      <br></br>
      <button onClick={handleDeleteClick}>{`Delete ${cow}`}</button>
    </div>
  );
};

export default CowView;
