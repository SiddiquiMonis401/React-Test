import React, {useContext} from 'react';
import {globalContext} from '../Context';
import {ProgressDiv} from './ProgressDiv';

function QuizProgress(props) {
    const { state: {questionsAsked}} = useContext(globalContext);
    return (
        <div>
        <ProgressDiv progressValue = {`${(questionsAsked +1) * 5}%`} />
        </div>
    );
}

export default QuizProgress;