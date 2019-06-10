import React, { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook'
import Filter from './components/Filter'
import personService from './services/persons'
import './app.css'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className="message"> {message}</div>
  )
}
const ErrorNotification = ({ errorMessage }) => {
  if (errorMessage === null) {
    return null
  }
  return (
    <div className="error"> {errorMessage}</div>
  )
}

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage]= useState(null)

  //input filter
  const handleFilter = (event) => {
    setNewFilter(event.target.value)
    //console.log('filter', event.target.value) 
  }
  //input name
  const handleAddNew = (event) => {
    setNewName(event.target.value)
    //console.log('name', event.target.value)
  } 
  
  //input number
  const handleAddNumber = (event) => {
     //console.log('number', event.target.value)
    setNewNumber(event.target.value)
  }

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fullfilled')
        setPersons(response)
      })
  }, [])

  // remove name and number
    const handleRemove = id => { 
      console.log('vent', id)
      const personRemove = persons.filter(p=>p.id===id)
      console.log('personRemove', personRemove)
      const name= personRemove[0].name
      console.log (id, 'target')
    if (window.confirm(`${name} poistetaan. Oletko varma? `)) {
      personService
      .remove(personRemove[0].id)
      console.log('removed', personRemove[0].id)
      setPersons(persons.filter(person => personRemove[0].id !== person.id))
      setMessage( `Henkilö ${name} on poistettu puhelinluettelosta`)
      setTimeout(() => {          
        setMessage(null)
              }, 5000)
      }
    }
  let nameObject = {}

//update phonenumber for existing name
  const updatedNumber = id => {
    const person = persons.find(p => p.id ===id )
    const changedNumber = {...person, number: newNumber}

    personService
      .update(id, changedNumber)
      .then(response => {
        console.log('update', response)
        setPersons(persons.map(person => person.id !== id ? person : response))
        setNewName('')
        setNewNumber('')
      })
      .catch(error =>{
        setMessage(null)
        setErrorMessage(`Valitettavasti tämä henkilö on jo poistettu`)
        setTimeout(() => {          
          setErrorMessage(null)
                }, 5000)
      })
    }

  //form
  const addNew = (event) => {
    console.log('persons add new',persons)
    event.preventDefault()
    let check = persons.findIndex(p => p.name === newName)

    if (check === -1) {
      nameObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(nameObject)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(nameObject))
          setNewName('')
          setNewNumber('')
          setMessage( `Henkilö ${newName} on lisätty puhelinluetteloon`)
          setTimeout(() => {          
            setMessage(null)
                  }, 5000)
        })
        .catch(error =>{
          setErrorMessage( `Henkilön lisääminen epäonnistui`)
          setTimeout(() => {          
            setErrorMessage(null)
                  }, 5000)
        })


    } else if (window.confirm(`${newName} on jo luettelossa, päivitäänkö numero?`) ) {
      let personId = persons[check].id
      //console.log ('personId', personId)
     updatedNumber(personId)
     setMessage( `Henkilön ${newName} puhelinnumero on päivitetty`)
          setTimeout(() => {          
            setMessage(null)
                  }, 5000)
      } else {
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Filter newFilter={newFilter} handleFilter={handleFilter} />
      <form onSubmit={addNew}>
        <div>
          nimi: <input value={newName} onChange={handleAddNew} />
        </div>
        <div>
          numero: <input value={newNumber} onChange={handleAddNumber} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <Notification message={message}/>
      <ErrorNotification errorMessage={errorMessage}/>
      <h2>Numerot</h2>
      <Phonebook persons={persons} handleRemove={handleRemove}/>
    </div>
  )
}

export default App