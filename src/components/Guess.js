import React from 'react'

export default function Guess({guess}) {
  return(
      <div className='guess-results'>
        {guess.map((palabra, index) => {
          return(
            <p key={index}>{palabra}</p>
          )
        })}
      </div>
  )
}