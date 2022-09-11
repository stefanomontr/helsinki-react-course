import { useDispatch } from 'react-redux'
import { addNote } from '../redux/notes/operations'

const NewNoteForm = () => {
  return (
    <form onSubmit={addNote}>
      <input name='note'/>
      <button type='submit'>Add note</button>
    </form>
  )
}

export default NewNoteForm