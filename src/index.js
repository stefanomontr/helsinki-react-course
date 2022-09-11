import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store'

const appRoot = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  appRoot.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

renderApp()
store.subscribe(renderApp)