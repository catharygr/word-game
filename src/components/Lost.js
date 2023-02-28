import React from 'react'

export default function Lost({answer}) {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
    
  )
}