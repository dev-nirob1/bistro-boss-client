import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/MenuPage/Menu/Menu";
import Order from "../Pages/OrderFood/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret/Secret";
import DashBoad from "../Layout/DashBoad";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/MyCart/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <div>This is error page</div>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path:'/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/secret',
                element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoad></DashBoad></PrivateRoutes>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);

export default router;