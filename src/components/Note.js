// presentational component: the component ignores the state of the store
// and whether the passed onClick func dispatches an action

const Note = ({ note, onClick }) => (
    <li onClick={onClick}>
        {note.content} : <strong>{note.important ? 'important' : ''}</strong>
    </li>
)

export default Note