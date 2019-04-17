import React, {useState}  from 'react';
import ReactDOM from 'react-dom';


const Button =(props)=> (
  <button onClick ={props.handleClick}> {props.text} </button>   
)
//laskee ja palauttaa eniten ääniä saaneen anekdootin
const Best =(props)=>{
  let mostVotes= props.votes.indexOf(Math.max(...props.votes))
  
  return(
    <div>
    <h1>Anecdote with most votes: </h1> 
    <p> {props.votes[mostVotes]} votes </p>
    <p>{anecdotes[mostVotes]}   </p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes]=useState(Array(anecdotes.length).fill(0))

  const handleAnecdoteClick =(props)=> {
    setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)))
    console.log ('selected', selected)
  }

  const handleVoteClick =(selected)=>{
    const copy =[...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log(copy)
  }

  return (
    <div>  
      <h1>Anecdote of the day: </h1>
      <p>{props.anecdotes[selected]}</p>
      <p>Anecdote has {votes[selected]} votes</p>
  
    <Button handleClick={() => handleVoteClick(selected)} text="Vote"/>  
    <Button  handleClick={() => handleAnecdoteClick(anecdotes)}text="Next anecdote"/>
    <Best votes={votes} anecdotes={anecdotes}/>
    
    </div>
    
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'A common mistake that people make when trying to design something completely foolproof was to underestimate the ingenuity of complete fools. ',
  'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilisation.',
  'For every complex problem there is an answer that is clear, simple, and wrong. ',
  'Any sufficiently advanced bug is indistinguishable from a feature. '
]
ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));


