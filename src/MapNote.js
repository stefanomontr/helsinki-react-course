import Note from './components/Note'

const App = ({notes}) => (
  <div>
    <h1>Notes</h1>
    <ul>
      {notes.map(note => (
        // `key` is NOT defined as a prop of Note! 
        // It must be passed inside the elements returned by the callback of `map` (here, inside <Note>)
          <Note key={note.id} note={note}/>
      ))}
    </ul>
  </div>
)

export default App