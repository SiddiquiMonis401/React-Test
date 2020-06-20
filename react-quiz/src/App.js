import React from 'react';
import ContextProvider from './Context';
import QuestionComponets from './Components/QuestionComponets';
import QuizProgress from './Components/QuizProgress';

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