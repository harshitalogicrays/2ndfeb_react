import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove_all_users, remove_user, selectUsers } from '../redux/userSlice'

const View = () => {
    // let allusers = useSelector((state)=>state.user.users)
    let allusers = useSelector(selectUsers)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>View Users</h1>
      <table class="table-auto border-separate border border-slate-400 ">
  <thead>
    <tr>
      <th class="border border-slate-300 ">Sr. No</th>
      <th class="border border-slate-300 ">Username</th>
      <th class="border border-slate-300 ">email</th>
      <th class="border border-slate-300 ">password</th>
      <th class="border border-slate-300 ">Remove</th>
    </tr>
  </thead>
  <tbody>
    {allusers.length==0 && <tr><td colSpan={5}>No user found</td> </tr>}
    {allusers.map((user,i)=>
    <tr>
      <td class="border border-slate-300 ">{i+1}</td>
      <td class="border border-slate-300 ">{user.username}</td>
      <td class="border border-slate-300 ">{user.email}</td>
      <td class="border border-slate-300 ">{user.password}</td>
      <td class="border border-slate-300 ">
        <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" 
        onClick={()=>dispatch(remove_user(i))}>Remove</button>
      </td>
    </tr>)}
  </tbody>
</table>
<button type="button" className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" 
onClick={()=>dispatch(remove_all_users())}>Remove All </button>

    </div>
  )
}

export default View
