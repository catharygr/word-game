import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form'
import Guees from '../Guess'


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState([])
  
  function handleGuess(formInput) {
    setGuess(oldData => [...oldData, formInput])
  }

  return (
  <>
    <Guees
      guess={guess}
    />
    <Form 
      handleGuess={handleGuess}
    />
  </>);
}

export default Game;
