import React from 'react'


const Course =(props) => {
    console.log('Course props', props)
   return (
        <div> 
        <Header course={props.course}/>  
        <Part parts={props.course.parts}/>
        <Count parts={props.course.parts}/>
        </div>
    )
  }
  const Header = (props)=> <h2> {props.course.name}</h2>
  
  const Part = (props)=>{
    console.log('Part', props)
   return ( 
     <ul> 
      {props.parts.map(p => <li key={p.id}>{p.name}: {p.exercises} tehtävää</li>)}
      </ul>
    )
    
  }
  
  const Count =(props)=> {
     console.log('Count props', props)
     return(
    <p> Yhteensä {props.parts.reduce((sum, parts) => sum + parts.exercises, 0)} tehtävää</p>
    )
  }
  
  export default Course