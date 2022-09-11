import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom/client'

const initialState = {
  notes: [
    {
      content: 'First default note',
      important: true,
      id: 1
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return {
        ...state,
        notes: state.notes.concat(action.payload)
      }
    case 'TOGGLE_IMPORTANCE':
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload ? {...note, important: !note.important} : note)
      }
    default:
      return state
  }
}

const store = createStore(reducer)

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const addNote = (e) => {
  e.preventDefault()
  const newNote = {
    content: e.target.note.value,
    important: false,
    id: generateId()
  }
  e.target.note.value = ''
  store.dispatch({
    type: 'NEW_NOTE',
    payload: newNote
  })
}

const toggleImportanceOf = (noteId) => {
  store.dispatch({
    type: 'TOGGLE_IMPORTANCE',
    payload: noteId
  })
}

const App = () => {

  return (
    <div>
      <form onSubmit={addNote}>
        <input name='note'/>
        <button type='submit'>Add note</button>
      </form>
      Notes:
      <ul>
        {store.getState().notes.map(note => {
          return (
            <li key={note.id} onClick={() => toggleImportanceOf(note.id)}>
              {note.content} : <strong>{note.important ? 'important' : ''}</strong>
            </li>
          )
        })}
      </ul>
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