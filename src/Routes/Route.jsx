import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/MenuPage/Menu/Menu";
import Order from "../Pages/OrderFood/Order/Order";

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
                path:'/order',
                element: <Order></Order>
            }
        ]
    },
]);

export default router;