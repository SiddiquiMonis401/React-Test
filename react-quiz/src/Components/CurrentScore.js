import React, {useContext} from 'react';
import {globalContext} from '../Context';
import { ProgressDiv } from './ProgressDiv';

function CurrentScore(props) {
    const { state: {currentProgress}} = useContext(globalContext);
    console.log(currentProgress);
    return (
        <>
        <h1>CurrentScore {Math.round(currentProgress * 100)} %</h1>
        <ProgressDiv progressValue={`${currentProgress * 100}%` } />
        </>
    );
}

export default CurrentScore;