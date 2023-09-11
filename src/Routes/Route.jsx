import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <div>This is error page</div>,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);

export default router;