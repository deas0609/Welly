import React, { useState } from 'react'

export default function HomePageComponent() {
  // 第一題
  const [stringReverse, setStringReverse] = useState('')
  const StringReverseFunction = (str) => {
    return str.split('').reverse().join('')
  }

  return (
    <>
      <h1>Welly 面試題目</h1>
      {/* 第一題 */}
      <div>
        <h2>1.JavaScript: 字串反轉</h2>
        <input
          type="text"
          placeholder="輸入文字"
          value={stringReverse}
          onChange={(e) => {
            setStringReverse(e.target.value)
          }}
        />
        <h3>{StringReverseFunction(stringReverse)}</h3>
      </div>
    </>
  )
}
