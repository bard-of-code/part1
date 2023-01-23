import { useState } from 'react'

const Title = ({ text }) => (
  <h1>{text}</h1>
)

const Button = ({ text, onClick }) =>(
  <div>
    <button onClick={onClick}>{text}</button>
  </div>
)

const Anecdote = ({ anecdote, point }) => (
  <div>
    <p>{anecdote}</p>
    <Votes point={point} />
  </div>
)

const Votes = ({ point }) => (
  <p>has {point} votes</p>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [points, setPoints] = useState(new Uint8Array(8))
  const [selected, setSelected] = useState(0)
  
  const switchAnecdote = () => () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteAnecdote = () => () => {
    const copy = [...points]
    copy[selected]++
    setPoints(copy)
  }

  const maxVotes = Math.max(...points)

  return (
    <div>
      <Title text="anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} point={points[selected]} />
      <br />
      <Votes selected={selected} points={points}/>
      <br />
      <Button text="vote" onClick={voteAnecdote()} />
      <Button text="next anecdote" onClick={switchAnecdote()} />
      <br />
      <Title text="top anecdote" />
      {(maxVotes !== 0) ? 
        (<Anecdote anecdote={anecdotes[points.indexOf(maxVotes)]} point={maxVotes} />) 
        : (<p>no votes</p>)}
    </div>
  )
}

export default App