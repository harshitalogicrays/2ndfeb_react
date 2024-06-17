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
import AddProduct from "./features/Admin/AddProduct"
import ViewProduct from "./features/Admin/ViewProduct"
import { Protected, ProtectedAdmin } from "./features/hiddenlinks"

const router = createBrowserRouter([
    {path:'/',element:<DefaultLayout><App/></DefaultLayout>,
    children:[
        {path:'',element:<Home/>},
        {path:'login',element:<Login/>},
        {path:'register',element:<Register/>},
        {path:'products',element:<ProductList/>},
        {path:'cart',element:<Protected><Cart/></Protected>},
 ]},
    {path:'/admin',element:<ProtectedAdmin><AdminLayout></AdminLayout></ProtectedAdmin>,children:[
        {path:'',element:<AdminDash/>},
        {path:'dash',element:<AdminDash/>},
        {path:'add',element:<AddProduct/>},
        {path:'view',element:<ViewProduct/>},
        {path:'edit/:id',element:<AddProduct/>},
     ]},
    {path:'*',element:<Pagenotfound/>},
])

export default router