import React from 'react'

export default function Win({numeroGuesses}) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{numeroGuesses} guesses.</strong>.
      </p>
  </div>
    
  )
}