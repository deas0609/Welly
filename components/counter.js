import React, { useState } from 'react'

export default function Counter() {
  //   第五題
  const [counterNumber, setCounterNumber] = useState(0)
  return (
    <>
      <h3>{counterNumber}</h3>
      <button
        onClick={() => {
          setCounterNumber(counterNumber - 1)
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCounterNumber(counterNumber + 1)
        }}
      >
        +
      </button>
    </>
  )
}
