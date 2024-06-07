import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./features/Home"
import Login from "./features/Login"
import Register from "./features/Register"
import Pagenotfound from "./features/Pagenotfound"
import ProductList from "./features/ProductList"

const router = createBrowserRouter([
    {path:'/',element:<App/>,
    children:[
        {path:'',element:<Home/>},
        {path:'login',element:<Login/>},
        {path:'register',element:<Register/>},
        {path:'products',element:<ProductList/>},
    ]},
    {path:'*',element:<Pagenotfound/>},
])

export default router