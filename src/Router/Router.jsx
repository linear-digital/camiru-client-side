
import { createBrowserRouter } from "react-router-dom"
import PublicLayout from "../Layouts/PublicLayout";
import Login from "../Pages/Public/Auth/Login";
import Signup from "../Pages/Public/Auth/Signup";
import ResetPassword from "../Pages/Public/Auth/ResetPassword";
import NotFound from "../Pages/Error/NotFound";
import Profile from "../Pages/User/Profile";
import PersonalData from "../Pages/User/_UI/PersonalData";
import Contacts from "../Pages/User/_UI/Contacts";
import Address from "../Pages/User/_UI/Adress";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserLayout from "../Layouts/UserLayout";
import All_Contacts from "../Pages/Dashboard/All-Contacts/All_Contacts";
import ClassRoom from "../Pages/Dashboard/Classroom/Classroom";


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
                element: <Dashboard />
            },
            {
                path: "contacts",
                element: <All_Contacts />
            },
            {
                path: "rooms",
                element: <ClassRoom />
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