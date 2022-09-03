import { useState } from 'react'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const Display = ({sides}) => {
  return (
    <p>{sides.left} : {sides.right}</p>
  )
}

const initSides = (left, right) => ({left: left, right: right})

const addLeft = (sides, setter) => () => setter({...sides, left: sides.left + 1})
const addRight = (sides, setter) => () => setter({...sides, right: sides.right + 1})

const App = () => {
  const [sides, setSides] = useState(initSides(0, 0))

  return(
    <>
      <Display 
        sides={sides}
      />
      <Button
        text="left"
        onClick={addLeft(sides, setSides)}
      />
      <Button
        text="right"
        onClick={addRight(sides, setSides)}
      />
    </>
  )
}

export default App
