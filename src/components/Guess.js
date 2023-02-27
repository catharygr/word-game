import React from 'react'


export default function Guess({guess}) {

  let splitLetters = guess 
  ? guess.split('') 
  : ['','','','','']


return(
  <p className='guess'>
    {splitLetters.map((letra, index) => (
      <span key={index} className='cell'>{letra}</span>
    ) )}
  </p>
)
 
}















