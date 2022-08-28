import { useState } from 'react'

/*
const App = () => {
  const [ counter, setCounter ] = useState(0)
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
}
*/
const Display = ({count}) => <p>{count}</p>

const Button = ({text, onClick}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [count, setCount] = useState(0)
  const setToZero = () => setCount(0)
  const plusOne = () => setCount(count + 1)
  const minusOne = () => setCount(count - 1)

  return(
    <>
      <Display
        count={count}
      />
      <Button 
        text='zero'
        onClick={setToZero}
      />
      <Button 
        text='plus one'
        onClick={plusOne}
      />
      <Button 
        text='minus one'
        onClick={minusOne}
      />
    </>
  )
}

export default App