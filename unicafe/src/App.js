import { useState } from 'react'

const Button = ({ feedback, setFeedback, text }) => (
  <div>
    <button onClick={() =>  setFeedback(feedback + 1)}>{text}</button>
  </div>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <th>{text}</th><td>{value}</td>
  </tr>
)

const Header = ({ name }) => (
  <div>
    <h1>{name}</h1>
  </div>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  const calculateAverage = () => (
    (good - bad) / all
  )

  const calculatePositive = () => (
    `${(good / all * 100)}%`
  )

  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={all} />
        <StatisticLine text='average' value={calculateAverage()} />
        <StatisticLine text='positive' value={calculatePositive()} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header name='give feedback' />
      <br />
      <Button feedback={good} setFeedback={setGood} text="good" />
      <Button feedback={neutral} setFeedback={setNeutral} text="neutral" />
      <Button feedback={bad} setFeedback={setBad} text="bad" />
      <br />
      <Header name='statistics' />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
