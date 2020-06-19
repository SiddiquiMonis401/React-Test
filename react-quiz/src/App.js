import React, {useContext} from 'react';
import ContextProvider from './Context';
import {globalContext} from './Context';
import QuestionComponets from './Components/QuestionComponets';
import QuizProgress from './Components/QuizProgress';
import MaximumScore from './Components/MaximumScore';
import CurrentScore from './Components/CurrentScore';

// Styles css
import './App.css'
import ProgressBarsContainer from './Components/ProgressBarsContainer';

export function App(props) {
  return (
    <ContextProvider>
      <div className='app'>
       <div className='sub-container'>
       <QuizProgress />
       <QuestionComponets />
       <ProgressBarsContainer />        
       </div> 
      </div>
    </ContextProvider>
  );
}

export default App;