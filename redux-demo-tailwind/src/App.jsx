import { useDispatch } from 'react-redux'
import { add_user } from './redux/userSlice'
import Add from './features/Add'
import View from './features/View'

function App() {
  // const dispatch = useDispatch()
  // let handleClick=()=>{
  //   dispatch(add_user({uname:'ram',address:'pune'}))
  // }
  return (
   <>
    {/* <button type="button" onClick={handleClick}>Click me to dispatch action</button>
    <h1 className='text-center text-orange-800 underline'>tailwind demo</h1> */}
    
    <div class="flex">
    <div class="flex-auto w-64">
    <Add/> 
  </div>
  <div class="flex-auto w-64">
    <View/>
  </div>
</div>
  
    </>
  )
}

export default App
