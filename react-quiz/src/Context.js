import React,{ createContext, useReducer } from 'react';
import Question from './questions.json';
import {AppReducer} from './ApplicationReducer'; 
import { CorrectAnswer, WrongAnswer, QuestionChange, ChangeEnd } from './ActionTypes';

const initialState = {
    correctAnswer:0,
    questionsAsked:0,
    currentScore:0,
    minScore:0,
    maxScore: 1,
    currentProgress: 0,
    questions: Question,
    ended:false,
}

export const globalContext = createContext(initialState);



function ContextProvider({children}) {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    // QuestionChange Handler
    const handleQuestionChange = () => {
       dispatch({type: QuestionChange});
    }
    
    // Correct Question Handler
    const handleCorrectAnswer = () => {
       dispatch({type: CorrectAnswer});
    }

    // Wrong Question Handler

    const handleWrongAnswer = () => {
        dispatch({type: WrongAnswer});
     }

    // end handler
    const handleEnd = () => {
        dispatch({type: ChangeEnd});
     } 
    return (
     <globalContext.Provider value={{
         state:state,
          handleQuestionChange:handleQuestionChange, 
          handleCorrectAnswer: handleCorrectAnswer,
          handleWrongAnswer: handleWrongAnswer,
          handleEnd: handleEnd,
          }}>
         {children}
     </globalContext.Provider>
    );
}

export default ContextProvider;