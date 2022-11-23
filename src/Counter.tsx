import React, { useState } from 'react'
import {Button} from '@mui/material'

export function Counter ()  {
const [count,setCount]=useState(4)
console.log('i am in useState');

 const decrementCount = () => {
  console.log('i am in decrement');
     
  setCount(count-1)
}

const incrementCount = () => {
  console.log('i am in increment');
  
  setCount(count+1)
}
  return (

<div className='container'>
   
    <Button variant="contained" size='small' onClick={decrementCount}>----</Button>
    <span>{count}</span>
    <Button variant="contained" size='small' onClick={incrementCount}>++++</Button>
    
      {/* <button>-</button>
      <span>0</span>
      <button>+</button> */}
    </div>
  )
}
