import { useState, useEffect } from 'react'
import axios from 'axios'
import NoteList from './components/NoteList'

const App = () => {
  const [notes, setNotes] = useState([])
  const [note, setNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }

  useEffect(hook, [])
  console.log('render', notes.length, 'notes')

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const addNote = (e) => {
    e.preventDefault()
    const content = e.target.noteContent.value
    const newNote = {
      id: notes.length + 1,
      content: content,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(newNote))
    setNote('')
  }

  const handleNoteChange = (e) => {
    setNote(e.target.value)
  }

  return (
    <>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll? "Show All" : "Show Only Important Notes"}
      </button>
      <NoteList notes={notesToShow} />
      <form onSubmit={addNote}>
        <input 
          onChange={handleNoteChange}
          value={note} 
          name="noteContent" />
        <button type="submit">
          Add Note
        </button>
      </form>
    </>
  )
}

export default App