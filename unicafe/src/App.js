import { useState } from 'react'

const FeedbackButton = ({ onClick, buttonText}) => (
  <div>
    <button onClick={onClick}>{buttonText}</button>
  </div>
)

const DisplayFeedback = ({ feedbackType, feedbackSum}) => (
  <div>
    {feedbackType} {feedbackSum}
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

  const handleClick = (feedback, setFeedback) => () => {
    setFeedback(feedback + 1)
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
      <DisplayFeedback feedbackType='good' feedbackSum={good} />
      <br />
      <DisplayFeedback feedbackType='neutral' feedbackSum={neutral} />
      <br />
      <DisplayFeedback feedbackType='bad' feedbackSum={bad} />
    </div>
  )
}

export default App
