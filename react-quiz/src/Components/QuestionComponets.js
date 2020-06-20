import React, { useContext, useState, useEffect } from 'react'
import { globalContext } from '../Context'
import DifficultyDisplayer from './DifficultyDisplayer'

// css
import './Question.css'

function QuestionComponets (props) {
  const [showNextButton, setShowNextButton] = useState(false)
  const [buttonsId, setButtonsId] = useState([])
  const [success,setSuccess] = useState(false);
  const {
    state,
    handleQuestionChange,
    handleCorrectAnswer,
    handleWrongAnswer,
    handleEnd
  } = useContext(globalContext)
  const {
    questionsAsked,
    questions,
    ended,
  } = state
  const options = [
    ...questions[questionsAsked].incorrect_answers,
    questions[questionsAsked].correct_answer
  ].sort()

  // useEffect
  useEffect(() => {
    setButtonsId(
      options.map(() => {
        return 'untouched'
      })
    )
    // eslint-disable-next-line 
  }, [])

  // handlers
  const optionClickedHandler = (e, index) => {
    
    setButtonsId(prevState =>
      prevState.map((items, i) => {
        if (i === index) {
          return (items = 'touched')
        } else {
          return items
        }
      })
    )


    setShowNextButton(true)
    if (!questions[questionsAsked].incorrect_answers.includes(escape(e.target.value))) {
      console.log('correct reached')
      handleCorrectAnswer()
      setSuccess(true);
    } else {
      setSuccess(false);
      console.log('wrong')
      handleWrongAnswer()
    }
    console.log(buttonsId)
  }
  // nextButtonHandler
  const nextButtonHandler = () => {
    if(questionsAsked === 19){
      handleEnd();
      return;
    }
    setShowNextButton(false)
    handleQuestionChange()

    setButtonsId(
      options.map(() => {
        return 'untouched'
      }))
    
  }

  return (
    <div className="questions-container">
      {!ended ?
      (
      <>  
      <h3>{unescape(questions[questionsAsked].category)}</h3>
      <DifficultyDisplayer difficulty={questions[questionsAsked].difficulty} />
      <h1>Question {questionsAsked + 1} of 20</h1>
      <h3>{unescape(questions[questionsAsked].question)}</h3>
      <div className="options-container">
        {options.map((item, index) => {
          return (
            <button
              disabled={showNextButton}
              className={
                buttonsId[index] === 'touched' ? 'touched' : 'untouched'
              }
              onClick={e => optionClickedHandler(e, index)}
              value={item}
              key={index}
            >
              {unescape(item)}
            </button>
          )
        })}
      </div>
      <div className="next-button-div">
        {showNextButton && (
          <>
          <h1>{success ? <>Correct!</> : <>Sorry</>}</h1>
          <button
            onClick={nextButtonHandler}
          >
            Next
          </button>
          </>
        )}
      </div>
      </>):(
        <h1>Ended!</h1>
      )}
      </div>
  )
}

export default QuestionComponets
