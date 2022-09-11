import { NEW_NOTE, TOGGLE_IMPORTANCE } from "./types";
import initialState from "./initialState";

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_NOTE:
            return {
                ...state,
                notes: state.notes.concat(action.payload)
            }
        case TOGGLE_IMPORTANCE:
            return {
                ...state,
                notes: state.notes.map(note => 
                    note.id === action.payload 
                    ? {...note, important: !note.important} 
                    : note
                )
            }
        default: return state
    }
}

export default noteReducer