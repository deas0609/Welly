import React, { useState } from 'react'
import Counter from './counter'
export default function HomePageComponent() {
  // 第一題
  const [stringReverse, setStringReverse] = useState('')
  const StringReverseFunction = (str) => {
    return str.split('').reverse().join('')
  }
  // 第二題
  const [arrayFiltering, setArrayFiltering] = useState('')
  const arrayFilteringFunction = (arrayNumbers, filterValue) => {
    const array = arrayNumbers.split(',')
    const result = array.filter((number) => number > filterValue)

    return result.join(', ')
  }
  //   第三題
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const formatName = (lastName, firstName) => {
    // let formattedName = ''
    // if (firstName) {
    //   formattedName += firstName
    // }
    // if (lastName) {
    //   formattedName += ' ' + lastName
    // }
    // return formattedName
    return `${firstName || ''}${firstName && lastName ? ' ' : ''}${
      lastName || ''
    }`
  }
  // 第四題
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
      {/* 第二題 */}
      <div>
        <h2>2.JavaScript: 陣列過濾</h2>
        <input
          type="text"
          placeholder="輸入多組數字，並用','間隔開來"
          value={arrayFiltering}
          onChange={(e) => {
            setArrayFiltering(e.target.value)
          }}
          size="30"
        />

        <h3>{arrayFilteringFunction(arrayFiltering, 5)}</h3>
      </div>
      {/* 第三題 */}
      <div>
        <h2>3.JavaScript: 重構</h2>
        <input
          type="text"
          placeholder="輸入姓氏"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="輸入名稱"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
        />
        <h3>{formatName(lastName, firstName)}</h3>
      </div>
      {/* 第四題 */}
      <div>
        <h2>4.React: 條件渲染</h2>
        <input
          type="checkbox"
          id="show"
          onChange={() => {
            setIsLoggedIn(!isLoggedIn)
          }}
        />
        <label for="show">勾選顯示</label>
        {isLoggedIn ? (
          <>
            <p>已勾選</p>
          </>
        ) : (
          <></>
        )}
      </div>
      {/* 第五題 */}
      <div>
        <h2>React: 組件</h2>
        <Counter />
      </div>
    </>
  )
}
