import { useDispatch } from "react-redux"
import { createNote, toggleImportanceOf } from "./actions"

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const addNote = (e) => {
    e.preventDefault()
    const newNote = {
        content: e.target.note.value,
        important: false,
        id: generateId()
    }
    e.target.note.value = ''
    return createNote(newNote)
}

export {addNote, toggleImportanceOf}