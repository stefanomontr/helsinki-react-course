import { NEW_NOTE, TOGGLE_IMPORTANCE } from "./types"

const createNote = (newNote) => {
    return {
        type: NEW_NOTE,
        payload: newNote
    }
}

const toggleImportanceOf = (noteId) => {
    return {
        type: TOGGLE_IMPORTANCE,
        payload: noteId
    }
}

export {createNote, toggleImportanceOf}