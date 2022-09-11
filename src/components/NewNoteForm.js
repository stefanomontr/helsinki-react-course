import { useDispatch } from 'react-redux'
import { addNote } from '../redux/notes/operations'

const NewNoteForm = () => {
  const dispatch = useDispatch()
  return (
    <form onSubmit={(e) => dispatch(addNote(e)) }>
      <input name='note'/>
      <button type='submit'>Add note</button>
    </form>
  )
}

export default NewNoteForm