import React from 'react';
import {range} from '../../utils'
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form'
import Guess from '../Guess'


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console. 
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  
  function handleGuess(formInput) {
    setGuesses(oldData => [...oldData, formInput])
  }

  const filaArray = range(NUM_OF_GUESSES_ALLOWED)

  return (
  <>
    <div className='guess-results'>
    {filaArray.map(num => <Guess key={num} answer={answer} guess={guesses[num]} />)}

    </div>

    <Form 
      handleGuess={handleGuess}
    />
  </>);
}

export default Game;
