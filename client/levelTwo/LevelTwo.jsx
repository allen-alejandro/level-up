import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CowView from './CowView.jsx';
import CowList from './CowList.jsx';
import CowForm from './CowForm.jsx';

const volatileCows = [
  'Trixie Tip',
  'Sir Loin',
  'Portia House',
  'Phyllis Mignon',
  'Viola Shank',
  'Rich Eye',
  'Frank',
  'Kurt',
];

const LevelTwo = (props) => {
  const [cows, setCows] = useState(volatileCows);
  const [selectedCow, setSelectedCow] = useState(volatileCows[0]);

  const displayCow = (cow) => {
    setCows(cows);
    setSelectedCow(cow);
  };

  const addNewCow = (cow) => {
    let hold = volatileCows.slice();
    hold.push(cow);
    setCows(hold);
    console.log('Added ', cow);
  };

  const deleteCow = (cow) => {
    const index = volatileCows.indexOf(cow);
    let hold = volatileCows.slice();
    hold.splice(index, 1);
    setCows(hold);
    setSelectedCow(hold[0]);
    console.log('Removed ', cow);
  };

  return (
    <div>
      <CowView cows={cows} cow={selectedCow} onDeleteClick={deleteCow} />
      <div>
        <CowForm onSubmit={addNewCow} />
        <br></br>
        <CowList cows={cows} onDisplayClick={displayCow} />
      </div>
    </div>
  );
};

export default LevelTwo;
