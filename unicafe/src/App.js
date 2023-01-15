import { useState } from 'react'

const FeedbackButton = ({ feedback, setFeedback, buttonText }) => (
  <div>
    <button onClick={() =>  setFeedback(feedback + 1)}>{buttonText}</button>
  </div>
)


const Statistic = ({ statisticDescription, statisticSum}) => (
  <div>
    {statisticDescription} {statisticSum}
  </div>
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
    <div>
      <Statistic statisticDescription='good' statisticSum={good} />
      <br />
      <Statistic statisticDescription='neutral' statisticSum={neutral} />
      <br />
      <Statistic statisticDescription='bad' statisticSum={bad} />
      <br />
      <Statistic statisticDescription='all' statisticSum={all} />
      <br />
      <Statistic statisticDescription='average' statisticSum={calculateAverage()} />
      <br />
      <Statistic statisticDescription='positive' statisticSum={calculatePositive()} />
    </div>
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
      <FeedbackButton feedback={good} setFeedback={setGood} buttonText="good" />
      <FeedbackButton feedback={neutral} setFeedback={setNeutral} buttonText="neutral" />
      <FeedbackButton feedback={bad} setFeedback={setBad} buttonText="bad" />
      <br />
      <Header name='statistics' />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
