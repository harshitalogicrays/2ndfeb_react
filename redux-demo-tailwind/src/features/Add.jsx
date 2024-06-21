import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_user } from '../redux/userSlice'
const Add = () => {
    let [user,setUser]=useState({username:'',email:'',password:''})
    const dispatch = useDispatch()
    let handleSubmit=(e)=>{
        e.preventDefault()
       dispatch(add_user(user))
       setUser({username:'',email:'',password:''})
    }
  return (
    <form onSubmit={handleSubmit}>
    <div className="space-y-1 space-x-3">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Add User</h2>
        <div className="mt-2 grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}
                  name="email"
                  id="email"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              password
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="password"  value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}
                  name="password"
                  id="password"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder=""
                />
              </div>
            </div>
          </div>
              </div>
 
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
   </div>
  </form>
  )
}

export default Add
