import { useDispatch } from "react-redux"
import * as noteActions from "./actions"

// you must use react hooks as useDispatch in react component or in custom hooks!

const dispatch = useDispatch() // cannot use react hook on top level

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const addNote = (e) => {
    const dispatch = useDispatch() // cannot use react hook in plain funcs
    e.preventDefault()
    const newNote = {
        content: e.target.note.value,
        important: false,
        id: generateId()
    }
    e.target.note.value = ''
    dispatch(noteActions.createNote(newNote))
}

const toggleImportanceOf = (noteId) => {
    const dispatch = useDispatch()
    dispatch(noteActions.toggleImportanceOf(noteId))
}

export {addNote, toggleImportanceOf}