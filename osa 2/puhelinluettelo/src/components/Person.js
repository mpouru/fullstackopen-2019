import React from 'react'

const Person = (props) => {
    console.log('person props', props)
    return (
      <>
        <ul>
          <li key={props.id}>{props.name} {props.number} <button onClick={()=> props.handleRemove(props.id)}> poista </button></li>
        </ul>
  
      </>
    )
  }



export default Person