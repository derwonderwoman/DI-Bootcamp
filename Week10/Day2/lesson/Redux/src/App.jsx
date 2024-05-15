import './App.css'
import {useSelector, useDispatch} from "react-redux"
import {change} from "./redux/actions"

function App(props) {
  const text = useSelector((state) => state.reducer.text)
  const dispatch = useDispatch()

  return (
    <>
      <h2>Redux-Example</h2>
      <h3>Text = {text}</h3>
      <input onChange={(e) => {dispatch(change(e.target.value))} }></input>
    </>
  )
}

// const mapStateToProps = (state) => {
//   return {
//       text: state.reducer.text
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//       change: (val) => dispatch(change(val))
//   }
// }

export default App;
