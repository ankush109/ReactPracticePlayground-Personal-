import { useContext } from "react"
import React from 'react'
import { Countcontext } from "./App"


function CompA() {
  const countcontext = useContext(Countcontext)
  return (
    <div>
      <button onClick={() => countcontext.countdispatch('increament')}>INCREASE</button>
      <button onClick={() => countcontext.countdispatch('decrement')}>DECREASE</button>
      <button onClick={() => countcontext.countdispatch('reset')}>RESET</button>
    </div>
  )
}

export default CompA