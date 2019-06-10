import React from 'react'
import Person from './Person'


//luo puhelinluettelon rivit
const Phonebook = ({persons, handleRemove}) =>{
    return(
   persons.map(p =>
    <>
    <Person
      id={p.id}
      name={p.name}
      number={p.number} 
      handleRemove={handleRemove}
    />
    </>
  ))
  }
  export default Phonebook


