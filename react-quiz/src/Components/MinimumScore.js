import React, {useContext} from 'react';
import {globalContext} from '../Context';
import { ProgressDiv } from './ProgressDiv';

function MinimumScore(props) {
    const { state: {minScore}} = useContext(globalContext);
    return (
        <>
        <h1>MinimumScore {minScore * 100} %</h1>
        <ProgressDiv progressValue={`${minScore * 100}%` } />
        </>
    );
}

export default MinimumScore;