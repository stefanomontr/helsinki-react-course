import { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleClick = (side) => () => {
    const setters = {'L': setLeft, 'R': setRight}
    const setSide = setters[side]

    const states = {'L': left, 'R': right}
    const state = states[side]
    
    setAll(allClicks.concat(side))
    setSide(state + 1)
  }

  // otherwise define two funcs to handle click
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
  
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleClick('L')}>left</button>
      <button onClick={handleClick('R')}>right</button>
      NEW
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

export default App