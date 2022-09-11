import { NEW_NOTE, TOGGLE_IMPORTANCE, SET_FILTER } from "./types";
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
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        default: return state
    }
}

export default noteReducer