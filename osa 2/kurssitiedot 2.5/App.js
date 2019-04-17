import React from 'react';
import Course from './components/Course.js'

const App = (props) => {
    
    console.log('app props', props)
    return (
      <div>
        <h1>Opetusohjelma</h1> 
        {props.course.map(course => <Course key={course.id} course={course}/>)} 
      </div>
    )
  }

  export default App