import React, { useState } from 'react'
import { Button } from '@mui/material'

export function Counter() {
  const [count, setCount] = useState(() => {

    return 0
  })

  const decrementCount = () => {

    setCount(prevCount => prevCount - 1)
  }

  const incrementCount = () => {

    setCount(prevCount => prevCount + 1)
  }
  return (

    <div className='container'>

      <Button variant="contained" size='small' onClick={decrementCount}>----</Button>
      <span>{count}</span>
      <Button variant="contained" size='small' onClick={incrementCount}>++++</Button>


    </div>
  )
}
