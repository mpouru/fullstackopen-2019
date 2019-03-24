import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const course = 'Half Stack -sovelluskehitys'

    const parts = [
    {
        name:'Reactin perusteet',
        exercises: 10
    },

    {
        name: 'Tiedonvälitys propseilla',
        exercises :7
    },

     {
        name: 'Komponenttien tila',
        exercises :14
    }
    ]
    console.log(parts)

    return (
        <div>
        <Header course = {course}/> 
        <Content parts={parts}/>
      <Total parts={parts} 
        />  
            
        </div> 
    )
}
const Header = (props) =>{
    console.log('header', props)
    return(
        <>
            <h1>{props.course}</h1>
        </>
        )
    }
const Content =(props)=> {
    console.log('content', props)
    return(
        <>
          <Part parts={props.parts}/>
          
        </> 
    )
}

const Part =(props)=> {
    console.log('part', props)
    return (
    <>
            <p>
            {props.parts[0].name} {props.parts[0].exercises}
            </p>
            <p>
            {props.parts[1].name} {props.parts[1].exercises}
            </p>
            <p>
            {props.parts[2].name} {props.parts[2].exercises}
            </p>
    </>
    )
}
const Total = (props)=> {
    console.log('total', props)
    
    return(
        <>
            <p>yhteensä {props.parts[0].exercises + props.parts[1].exercises +  props.parts[2].exercises} tehtävää</p>   
        </>
        )
}


ReactDOM.render(<App />, document.getElementById('root'));



