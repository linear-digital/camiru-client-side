
import { createBrowserRouter } from "react-router-dom"
import PublicLayout from "../Layouts/PublicLayout";
import Login from "../Pages/Public/Auth/Login";
import Signup from "../Pages/Public/Auth/Signup";
import ResetPassword from "../Pages/Public/Auth/ResetPassword";
import NotFound from "../Pages/Error/NotFound";
import UserLayout from "../Pages/User/UserLayout";
import Profile from "../Pages/User/Profile";
import PersonalData from "../Pages/User/_UI/PersonalData";
import Contacts from "../Pages/User/_UI/Contacts";
import Address from "../Pages/User/_UI/Adress";


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
    },
    {
        path: "/dashboard",
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <Profile />
            },
            {
                path: "profile",
                element: <Profile />,
                children: [
                    {
                        index: true,
                        element: <PersonalData />
                    },
                    {
                        path: "contacts",
                        element: <Contacts />
                    },
                    {
                        path: "address",
                        element: <Address />
                    }
                ]
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router