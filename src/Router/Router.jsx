
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
import Graduate from "../Pages/Dashboard/User/Graduate";
import Photos_Videos from "../Pages/Dashboard/PhotosVideos/Photos_Videos";
import Messages from "../Pages/Dashboard/Messages/Messages";
import Notifications from "../Pages/Dashboard/Notifications/Notifications";
import StaffList from "../Pages/Dashboard/Staffs/StaffList";
import StaffRoster from "../Pages/Dashboard/Staffs/StaffRoster";
import ScheduleTimeOff from "../Pages/Dashboard/User/Profile/_UI/ScheduleTimeOff";
import TimeCard from "../Pages/Dashboard/User/Profile/_UI/TimeCard";
import AddStudent from "../Pages/Dashboard/AddStudent/AddStudent";
import Calendar from "../Pages/Dashboard/Calendar/Calendar";
import CheckInOutReport from "../Pages/Dashboard/CheckInOutReport/CheckInOutReport";
import Support from "../Pages/Dashboard/Support/Support";
import General from "../Pages/Dashboard/Support/Steps/General";
import Payments from "../Pages/Dashboard/Support/Steps/Payments";
import Services from "../Pages/Dashboard/Support/Steps/Services";
import ContactStep from "../Pages/Dashboard/Support/Steps/ContactStep";
import CenterConfig from "../Pages/Dashboard/CenterConfig/CenterConfig";
import CenterConfigHome from "../Pages/Dashboard/CenterConfig/CenterConfigHome";
import ClassroomSettings from "../Pages/Dashboard/CenterConfig/ClassroomSettings";
import HealthScreening from "../Pages/Dashboard/CenterConfig/HealthScreening";
import RegistrationConfig from "../Pages/Dashboard/CenterConfig/RegistrationConfig";
import Logins from "../Pages/Dashboard/CenterConfig/Logins";
import Deactive from "../Pages/Dashboard/User/Profile/Deactive";
import Reports from "../Pages/Dashboard/Reports/Reports";
import AuthChecker from "../Layouts/AuthChecker";
import App from "../App";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
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
                path: "dashboard",
                element: <AuthChecker>
                    <UserLayout />
                </AuthChecker>,
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
                        path: "messages",
                        element: <Messages />
                    },
                    {
                        path: "notifications",
                        element: <Notifications />
                    },
                    {
                        path: "calendar",
                        element: <Calendar />
                    },
                    {
                        path: "rooms",
                        element: <ClassRoom />
                    },
                    {
                        path: "media",
                        element: <Photos_Videos />
                    },
                    {
                        path: "rooms-roster",
                        element: <Classroom_roster />
                    },
                    {
                        path: "checkin",
                        element: <Checkin page="student" />
                    },
                    {
                        path: "checkio-report",
                        element: <CheckInOutReport />
                    },
                    {
                        path: "checkin-staff",
                        element: <Checkin page="staff" />
                    },
                    {
                        path: "staffs",
                        element: <StaffList />
                    },
                    {
                        path: "staffs-roster",
                        element: <StaffRoster />
                    },
                    {
                        path: "reports",
                        element: <Reports />
                    },
                    {
                        path: "support",
                        element: <Support />,
                        children: [
                            {
                                index: true,
                                element: <General />
                            },
                            {
                                path: "payments",
                                // element: <Payments />
                                element: <General />
                            },
                            {
                                path: "services",
                                // element: <Services />
                                element: <General />
                            },
                            {
                                path: "contact",
                                // element: <ContactStep />
                                element: <General />
                            }
                        ]
                    },
                    {
                        path: "add-student",
                        element: <AddStudent />
                    },
                    {
                        path: "config",
                        element: <CenterConfig />,
                        children: [
                            {
                                index: true,
                                element: <CenterConfigHome />
                            },
                            {
                                path: "classroom",
                                element: <ClassroomSettings />
                            },
                            {
                                path: "health",
                                element: <HealthScreening />
                            },
                            {
                                path: "reg-config",
                                element: <RegistrationConfig />
                            },
                            {
                                path: "logins",
                                element: <Logins />
                            }
                        ]
                    },
                    {
                        path: ":role/:id",
                        element: <Outlet />,
                        children: [
                            {
                                path: "profile",
                                element: <UserProfile />,
                                children: [
                                    {
                                        index: true,
                                        element: <Enrollment />,
                                    }, {
                                        path: "enrollment",
                                        element: <Enrollment />,
                                    },
                                    {
                                        path: "enrollment/edit",
                                        element: <Enrollment edit={true} />,
                                    },
                                    {
                                        path: "details",
                                        element: <Address_Contact />
                                    },
                                    {
                                        path: "timecard",
                                        element: <TimeCard />
                                    },
                                    {
                                        path: "details/edit",
                                        element: <Address_Contact edit={true} />
                                    },
                                    {
                                        path: "schedule-absence",
                                        element: <ScheduleAbsence />
                                    },
                                    {
                                        path: "schedule-timeoff",
                                        element: <ScheduleTimeOff />
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
                                    },
                                    {
                                        path: "graduate",
                                        element: <Graduate />
                                    },
                                    {
                                        path: "deactive",
                                        element: <Deactive />
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
        ]
    },
    // {
    //     path: "*",
    //     element: <NotFound />
    // }
])

export default router