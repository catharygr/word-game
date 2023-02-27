import React from 'react'
import {checkGuess} from '../game-helpers'


export default function Guess({guess, answer}) {

 const arrayLetras = guess ? checkGuess(guess, answer) : ['','','','','']


return(
  <p className='guess'>
    {arrayLetras.map(({status, letter})=> {
       return letter 
        ? <span key={Math.random()} className={`cell ${status}`}>{letter}</span>
        : <span key={Math.random()} className='cell'></span>
    })}
  </p>
)
 
}















