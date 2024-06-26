import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./features/Home"
import Login from "./features/Login"
import Register from "./features/Register"
import Pagenotfound from "./features/Pagenotfound"
import ProductList from "./features/ProductList"
import Cart from "./features/Cart"
import DefaultLayout from "./features/DefaultLayout"
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

    {path:'*',element:<Pagenotfound/>},
])

export default router