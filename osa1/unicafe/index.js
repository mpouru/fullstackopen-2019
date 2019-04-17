import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button= (props)=> 
<button onClick= {props.handleClick}> {props.text}</button>

 
const App= ()=> {

const [good, setGood]= useState(0)
const [neutral, setNeutral]= useState(0)
const [bad, setBad]=useState(0)
let average = 0
let positive = 0
average = (({good}*1)+({neutral}*0)+({bad}*-1))/({good}+{neutral}+{bad})
positive = good/(good+neutral+bad)*100




console.log('average', average, 'positive', positive, )


return ( 
    <div>
        <h1>anna palautetta</h1>
        <Button text="good"  handleClick= {()=> setGood(good +1)  } 
        />
        <Button handleClick= {()=> setNeutral(neutral +1) } 
        text="neutral"
        />
        <Button handleClick= {()=> setBad(bad +1) } 
        text="bad"
        />
        
        <h1>statistiikka</h1>
        <p>Hyvä {good} </p>
        <p>Neutraali {neutral} </p>
        <p>Huono {bad}</p>
        <p>Keskiarvo {average}</p>
        <p>Positiivisia  {positive}</p>
    </div>
)
}

ReactDOM.render(<App />, document.getElementById('root'));



