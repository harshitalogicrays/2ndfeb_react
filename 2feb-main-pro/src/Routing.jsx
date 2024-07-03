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
import AdminLayout from "./features/Admin/AdminLayout"
import AdminDash from "./features/Admin/AdminDash"
import CheckoutDetails from "./features/CheckoutDetails"
import AddCategory from "./features/Admin/AddCategory"
import ViewCategory from "./features/Admin/ViewCategory"
import AddProduct from "./features/Admin/AddProduct"
import ViewProduct from "./features/Admin/ViewProduct"

const router = createBrowserRouter([
    {path:'/',element:<DefaultLayout><App/></DefaultLayout>,
    children:[
        {path:'',element:<Home/>},
        {path:'login',element:<Login/>},
        {path:'register',element:<Register/>},
        {path:'products',element:<ProductList/>},
        {path:'cart',element:<Cart/>},
        {path:'checkout-details',element:<Protected><CheckoutDetails/></Protected>},
 ]},
    {path:'/admin',element:<ProtectedAdmin><AdminLayout/></ProtectedAdmin>,
        children:[
            {path:'dash',element:<AdminDash/>},
            {path:'add/category',element:<AddCategory/>},
            {path:'view/category',element:<ViewCategory/>},
            {path:'edit/category/:id',element:<AddCategory/>},
            {path:'add/product',element:<AddProduct/>},
            {path:'edit/product/:id',element:<AddProduct/>},
            {path:'view/product',element:<ViewProduct/>},
        ]},
    {path:'*',element:<Pagenotfound/>},
])

export default router