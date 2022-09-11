import { connect } from "react-redux"
import { addNote, toggleImportanceOf } from "./redux/notes/operations"

const App = ({ notes, addNote, toggleImportanceOf }) => {
  return (
    <div>
      <form onSubmit={addNote}>
        <input name='note'/>
        <button type='submit'>Add note</button>
      </form>
      Notes:
      <ul>
        {
          notes.map(note => {
            return (
              <li key={note.id} onClick={() => toggleImportanceOf(note.id)}>
                {note.content} : <strong>{note.important ? 'important' : ''}</strong>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addNote(note)),
    toggleImportanceOf: (noteId) => dispatch((toggleImportanceOf(noteId)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)