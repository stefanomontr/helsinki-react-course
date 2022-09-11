import { useDispatch } from "react-redux"
import { showAllNotes, showOnlyImportantNotes, showOnlyUnimportantNotes } from "../redux/notes/actions"

const VisibilityFilter = () => {
    const dispatch = useDispatch()
    const inputName = 'filter'
    return (
        <div>
            ALL 
            <input 
                name={inputName} 
                type='radio'
                onChange={() => dispatch(showAllNotes())}
            /> 
            IMPORTANT 
            <input 
                name={inputName} 
                type='radio' 
                onChange={() => dispatch(showOnlyImportantNotes())}
            /> 
            INIMPORTANT 
            <input 
                name={inputName} 
                type='radio' 
                onChange={() => dispatch(showOnlyUnimportantNotes())}
            /> 
        </div>
        
    )
}

export default VisibilityFilter