import React from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import propTypes from 'prop-types'

function DifficultyDisplayer({difficulty}) {
    return (
        <div>
            {
             difficulty.toLowerCase() === 'hard' && ['fill','fill','fill'].map((items) => {
               if(items=== 'fill'){
                   return(
                   <AiFillStar />
                   )
               }
               else{
                   return(<AiOutlineStar />)
               }
             })   
            }
            {
             difficulty.toLowerCase() === 'medium' && ['fill','fill','outline'].map((items) => {
               if(items=== 'fill'){
                   return(
                   <AiFillStar />
                   )
               }
               else{
                   return(<AiOutlineStar />)
               }
             })   
            }
            {
             difficulty.toLowerCase() && ['fill','outline','outline'].map((items) => {
               if(items=== 'fill'){
                   return(
                   <AiFillStar />
                   )
               }
               else{
                   return(<AiOutlineStar />)
               }
             })   
            }
        </div>
    );
}

DifficultyDisplayer.propTypes = {
    difficulty:propTypes.string.isRequired,
}

DifficultyDisplayer.default = {
    difficulty: 'easy'
}

export default DifficultyDisplayer;