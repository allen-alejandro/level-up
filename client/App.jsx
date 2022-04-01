// TODO: What else will we need to import from React?
import React, { useState } from 'react';
import LevelOne from './levelOne/LevelOne.jsx';
import LevelTwo from './levelTwo/LevelTwo.jsx';

// TODO: Hmmmmmm, something's not right here.
const App = (props) => {
  const [showLevelOne, setShowLevelOne] = useState(true);
  const [showLevelTwo, setShowLevelTwo] = useState(false);
  const [showLevelThree, setShowLevelThree] = useState(false);

  const updateLevelOne = () => {
    setShowLevelOne(true);
    setShowLevelTwo(false);
    setShowLevelThree(false);
    console.log('Showing Level 1');
  };

  const updateLevelTwo = () => {
    setShowLevelOne(false);
    setShowLevelTwo(true);
    setShowLevelThree(false);
    console.log('Showing Level 2');
  };

  const updateLevelThree = () => {
    setShowLevelOne(false);
    setShowLevelTwo(false);
    setShowLevelThree(true);
    console.log('Showing Level 3');
  };

  return (
    <div className='app'>
      <button onClick={updateLevelOne}>Show Level One</button>
      <button onClick={updateLevelTwo}>Show Level Two</button>
      <button onClick={updateLevelThree}>Show Level Three</button>

      {showLevelOne ? <LevelOne phrases={props.samplePhrases} /> : null}
      {showLevelTwo ? <LevelTwo /> : null}
      {showLevelThree ? (
        <div id='level-three'>
          <h1>Level Three</h1>
        </div>
      ) : null}
    </div>
  );
};

export default App;
