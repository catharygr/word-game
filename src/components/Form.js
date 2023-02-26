import React from 'react'

export default function Form({handleGuess}) {
  const [form, setForm] = React.useState('')
  
  function onSubmitForm(event) {
    event.preventDefault()
    handleGuess(form)
    setForm('')

  }

  return(
    <form 
    onSubmit={onSubmitForm}
    
    className="guess-input-wrapper">
    <label htmlFor="guess-input">Enter guess:</label>
    <input
     id="guess-input"
     type="text"
     value={form}
     required
     pattern='[A-Za-z]{5}'
     maxLength={5}
     minLength={5}
     title='word of 5 letters'
     onChange={event => {
      setForm(event.target.value.toUpperCase())
     }}
     
     />
  </form>
  )
}