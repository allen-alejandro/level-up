import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CowForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
    setName('');
  };

  return (
    <div>
      <h2>Wanna see your cow here?</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type='text'
          placeholder='Name'
          value={name}
        />
        <button type='submit'>Add me!</button>
      </form>
    </div>
  );
};

export default CowForm;
