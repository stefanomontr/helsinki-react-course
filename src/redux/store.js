import { createStore } from 'redux'
import noteReducer from './notes/reducers'

const store = createStore(noteReducer)

export default store