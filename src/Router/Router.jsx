
import { createBrowserRouter } from "react-router-dom"
import PublicLayout from "../Layouts/PublicLayout";
import Login from "../Pages/Public/Auth/Login";
import Signup from "../Pages/Public/Auth/Signup";
import ResetPassword from "../Pages/Public/Auth/ResetPassword";


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
            }, {
                path: "signup",
                element: <Signup />
            }, {
                path: "reset-password",
                element: <ResetPassword />
            },
        ]
    }
])

export default router