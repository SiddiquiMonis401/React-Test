import React, {useContext} from 'react';
import {globalContext} from '../Context';
import { ProgressDiv } from './ProgressDiv';

function MaximumScore(props) {
    const { state: {maxScore}} = useContext(globalContext);
    return (
        <>
            <h1>Maximum Score {Math.round(maxScore * 100)} %</h1>
            <ProgressDiv progressValue={`${maxScore * 100}%` } />
        </>
        
    );
}

export default MaximumScore;