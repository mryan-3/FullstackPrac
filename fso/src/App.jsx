import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"


const App = () => {
  const course = 'Half Stack City'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part3={part3} part2={part2} part1={part1} exercises3={exercises3}  exercises2={exercises2} exercises1={exercises1}/>
      <Total exercises3={exercises3} exercises2={exercises2} exercises1={exercises1} />
    </div>
  )
}
export default App
