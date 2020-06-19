import React from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';

function DifficultyDisplayer({difficulty}) {
    return (
        <div>
            {
             difficulty === 'hard' && ['fill','fill','fill'].map((items) => {
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
             difficulty === 'medium' && ['fill','fill','outline'].map((items) => {
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
             difficulty === 'easy' && ['fill','outline','outline'].map((items) => {
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

export default DifficultyDisplayer;