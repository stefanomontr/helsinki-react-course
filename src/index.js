import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom/client'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'zero':
      return 0
    default:
      return state
  }
}

const store = createStore(reducer)

const App = () => {

  return (
    <div>
      <div>
        State of the store: {store.getState()}
      </div>
      <div>
        <button onClick={e => store.dispatch({type: 'increment'})}>Increment</button>
      </div>
      <div>
        <button onClick={e => store.dispatch({type: 'decrement'})}>Decrement</button>
      </div>
      <div>
        <button onClick={e => store.dispatch({type: 'zero'})}>Set to zero</button>
      </div>
    </div>
  )
}

const appRoot = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  appRoot.render(
    <App />
  )
}

renderApp()

store.subscribe(renderApp)
store.subscribe(() => console.log(store.getState()))