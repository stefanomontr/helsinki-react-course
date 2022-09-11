import NewNoteForm from "./components/NewNoteForm"
import NoteList from "./components/NoteList"

/* 
Redux dispatch hook (i.e., useDispatch) allows access to the store from any component, 
without the need to define state on the first common ancestor of stateful components:
the ancestor was usually App, and then the state had to be passed on to child components 
through props -> now the code of App is much cleaner and the state is directly accessed
whithin NewNoteForm and NoteList!
*/

const App = () => {
  return (
    <div>
      <NewNoteForm/>
      <NoteList/>
    </div>
  )
}

export default App