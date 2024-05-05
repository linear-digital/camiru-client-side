
import { createBrowserRouter } from "react-router-dom"
import PublicLayout from "../Layouts/PublicLayout";
import Login from "../Pages/Public/Auth/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <Login />
            }, {
                path: "login",
                element: <Login />
            },
        ]
    }
])

export default router