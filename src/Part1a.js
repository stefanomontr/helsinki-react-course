const Header = (props) => (
  <h1>{props.course}</h1>
)

const PartExercises = (props) => (
  <p>
     {props.part.name} {props.part.exercises}
  </p>
)

const Content = ({parts}) => (
  <>
    {parts.map(part => <PartExercises part={part} key={part.name}/>)}
  </>
)

const Total = ({parts}) => ( // you can destructure an obj using its attributes (all of them or some)
  <p>Number of exercises {parts.reduce((prev, curr) => prev + curr.exercises, 0)}</p>
)

const newPart = (name, exercises) => ({
    name: name,
    exercises: exercises
})

const newParts = (parts) => Object.keys(parts).map(k => newPart(k, parts[k]))

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: newParts({
      'Fundamentals of React': 10,
      'Using props to pass data': 8,
      'State of a component': 14
    })
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App