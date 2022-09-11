import { useDispatch, useSelector } from 'react-redux'
import Note from './Note'
import { toggleImportanceOf } from '../redux/notes/operations'
import { ALL_NOTES, ONLY_IMPORTANT, ONLY_UNIMPORTANT } from '../redux/notes/constants'

/* 
container component: the component implements a logic that determines 
1) what is shown by the presentational component (Note) 
2) which action is dispatched by the presentational component (through useDispatch)
Also, the container component knows the state of the store (through useSelector)
*/

const NoteList = () => {
  const dispatch = useDispatch()
  const noteFilter = useSelector(state => state.filter)
  const notes = useSelector(state => {
    switch (noteFilter) {
      case ALL_NOTES:
        return state.notes
      case ONLY_IMPORTANT:
        return state.notes.filter(note => note.important)
      case ONLY_UNIMPORTANT:
        return state.notes.filter(note => !note.important)
      default: return []
    }
  })
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes.map(note => (
            <Note 
              key={note.id} 
              note={note}
              onClick={() => dispatch(toggleImportanceOf(note.id))}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default NoteList 