import { NEW_NOTE, TOGGLE_IMPORTANCE, SET_FILTER } from "./types"
import { ALL_NOTES, ONLY_IMPORTANT, ONLY_UNIMPORTANT } from "./constants"

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

const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        payload: filter
    }
}

const showAllNotes = () => {
    return setFilter(ALL_NOTES)
}
const showOnlyImportantNotes = () => {
    return setFilter(ONLY_IMPORTANT)
}
const showOnlyUnimportantNotes = () => {
    return setFilter(ONLY_UNIMPORTANT)
}

export {
    createNote, 
    toggleImportanceOf, 
    showAllNotes, 
    showOnlyImportantNotes,
    showOnlyUnimportantNotes
}