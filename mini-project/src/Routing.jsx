import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./features/Home"
import Login from "./features/Login"
import Register from "./features/Register"
import Pagenotfound from "./features/Pagenotfound"
import ProductList from "./features/ProductList"
import Cart from "./features/Cart"
import Dashboard from "./features/Admin/Dashboard"
import DefaultLayout from "./features/DefaultLayout"
import AdminLayout from "./features/Admin/AdminLayout"
import AdminDash from "./features/Admin/AdminDash"

const router = createBrowserRouter([
    {path:'/',element:<DefaultLayout><App/></DefaultLayout>,
    children:[
        {path:'',element:<Home/>},
        {path:'login',element:<Login/>},
        {path:'register',element:<Register/>},
        {path:'products',element:<ProductList/>},
        {path:'cart',element:<Cart/>},
 ]},
    {path:'/admin',element:<AdminLayout><Dashboard/></AdminLayout>,children:[
        {path:'',element:<AdminDash/>}
     ]},
    {path:'*',element:<Pagenotfound/>},
])

export default router