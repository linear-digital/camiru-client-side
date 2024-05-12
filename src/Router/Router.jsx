
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
import Classroom_roster from "../Pages/Dashboard/ClassRoomRoster/Classroom_roster";
import Checkin from "../Pages/Dashboard/Checkin/Checkin";
import { Outlet } from "react-router-dom";
import UserProfile from '../Pages/Dashboard/User/Profile/Profile'
import Enrollment from "../Pages/Dashboard/User/Profile/_UI/Enrollment";
import Address_Contact from "../Pages/Dashboard/User/Profile/_UI/Address_Contact";
import ScheduleAbsence from "../Pages/Dashboard/User/Profile/_UI/ScheduleAbsence";
import Report from "../Pages/Dashboard/User/Profile/_UI/Report";
import Development_evidence from "../Pages/Dashboard/User/Profile/_UI/Development_evidence";
import HealthLog from "../Pages/Dashboard/User/Profile/_UI/HealthLog";

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
                path: "rooms-roster",
                element: <Classroom_roster />
            },
            {
                path: "checkin",
                element: <Checkin />
            },
            {
                path: "student/:id",
                element: <Outlet />,
                children: [
                    {
                        path: "profile",
                        element: <UserProfile />,
                        children: [
                            {
                                path: "enrollment",
                                element: <Enrollment />
                            },
                            {
                                path: "details",
                                element: <Address_Contact />
                            },
                            {
                                path: "schedule-absence",
                                element: <ScheduleAbsence />
                            },
                            {
                                path: "report",
                                element: <Report />
                            },
                            {
                                path: "development-evidence",
                                element: <Development_evidence />
                            },
                            {
                                path: "health-log",
                                element: <HealthLog />
                            }
                        ]
                    },

                ]
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