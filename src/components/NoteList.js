import Note from './Note'

const NoteList = ({ notes, showOnlyImportant }) => {
    return (
      <div>
        <h1>Notes</h1>
        <ul>
          {notes
            .map(note => (
              <Note key={note.id} note={note}/>
          ))}
        </ul>
      </div>
    )
}

export default NoteList 