import { useState } from 'react'

const FeedbackButton = ({ onClick, buttonText}) => (
  <div>
    <button onClick={onClick}>{buttonText}</button>
  </div>
)

const DisplayFeedback = ({ feedbackDescription, feedbackSum}) => (
  <div>
    {feedbackDescription} {feedbackSum}
  </div>
)

const Header = ({ name }) => (
  <div>
    <h1>{name}</h1>
  </div>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad

  const handleClick = (feedback, setFeedback) => () => {
    setFeedback(feedback + 1)
  }

  const calculateAverage = () => {
    if (all === 0) {
      return '-'
    }

    return ((good - bad) / all)
  }

  const calculatePositive = () => {
    if (all === 0) {
      return '-'
    }

    return `${(good / all * 100)}%`
  }

  return (
    <div>
      <Header name='give feedback' />
      <br />
      <FeedbackButton onClick={handleClick(good, setGood)} buttonText="good" />
      <FeedbackButton onClick={handleClick(neutral, setNeutral)} buttonText="neutral" />
      <FeedbackButton onClick={handleClick(bad, setBad)} buttonText="bad" />
      <br />
      <Header name='statistics' />
      <br />
      <DisplayFeedback feedbackDescription='good' feedbackSum={good} />
      <br />
      <DisplayFeedback feedbackDescription='neutral' feedbackSum={neutral} />
      <br />
      <DisplayFeedback feedbackDescription='bad' feedbackSum={bad} />
      <br />
      <DisplayFeedback feedbackDescription='all' feedbackSum={all} />
      <br />
      <DisplayFeedback feedbackDescription='average' feedbackSum={calculateAverage()} />
      <br />
      <DisplayFeedback feedbackDescription='positive' feedbackSum={calculatePositive()} />
    </div>
  )
}

export default App
