import { ALL_NOTES } from "./constants"

const initialState = {
    notes: [
        {
            content: 'First default note',
            important: true,
            id: 1
        }
    ],
    filter: ALL_NOTES
}

export default initialState