import Part from './Part'

const Content = ({parts}) => {
  return (
    <div>

      <Part name={parts[0].name} exercises={parts[0].exercises}/>
    </div>
  )
}
export default Content
