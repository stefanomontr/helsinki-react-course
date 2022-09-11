import { useDispatch, useSelector } from 'react-redux'
import Note from './Note'
import { toggleImportanceOf } from '../redux/notes/operations'

/* 
container component: the component implements a logic that determines 
1) what is shown by the presentational component (Note) 
2) which action is dispatched by the presentational component (through useDispatch)
Also, the container component knows the state of the store (through useSelector)
*/

const NoteList = () => {
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes)

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