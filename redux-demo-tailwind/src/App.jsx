import { useDispatch } from 'react-redux'
import './App.css'
import { add_user } from './redux/userSlice'

function App() {
  const dispatch = useDispatch()
  let handleClick=()=>{
    dispatch(add_user({uname:'ram',address:'pune'}))
  }
  return (
   <>
    <button type="button" onClick={handleClick}>Click me to dispatch action</button>
    <h1 className='text-center text-orange-800 underline'>tailwind demo</h1>
    </>
  )
}

export default App
