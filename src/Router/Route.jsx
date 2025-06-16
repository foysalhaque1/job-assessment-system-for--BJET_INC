import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Mainlayout from "../Pages/Mainlayout/Mainlayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Assignments from "../Pages/Assignments/Assignments";
import PendingAssignment from "../Pages/PendingAssignment/PendingAssignment";
import PrivateRoute from "../Provider/PrivateRoute/PrivateRoute";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import MyAttemptedAssignments from "../Pages/MyAttemptedAssignments/MyAttemptedAssignments";
import Terms from "../Pages/Footer/Terms";
import ContactInfo from "../Pages/Footer/ContactInfo";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import TakeAssignment from "../Pages/AssignmentDetails/TakeAssignment";
import GiveMark from "../Pages/GiveMark/GiveMark";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path:"/assignments",
                element: <Assignments></Assignments>,
                loader:()=>fetch('https://job-assessment-project-server2.vercel.app/assignments')
            },
            {
                path:"/assignments/:id",
                element: <PrivateRoute>
                    <AssignmentDetails></AssignmentDetails>
                </PrivateRoute>,
                loader:({params})=>fetch(`https://job-assessment-project-server2.vercel.app/assignments/${params.id}`)
            },
            {
                path:"/takeAssignment/:id",
                element:<PrivateRoute>
                    <TakeAssignment></TakeAssignment>
                </PrivateRoute>,
                
            },
            {
                path:"/createAssignment",
                element: <PrivateRoute>
                    <CreateAssignment></CreateAssignment>
                </PrivateRoute>
            },
            {
                path:"/myAttemptedAssignments",
                element: <PrivateRoute>
                    <MyAttemptedAssignments></MyAttemptedAssignments>
                </PrivateRoute>,
               
            },
            {
                path:"/pendingAssignments",
                element:<PrivateRoute>
                     <PendingAssignment></PendingAssignment>
                </PrivateRoute>,
                loader:()=>fetch('https://job-assessment-project-server2.vercel.app/submittedAssignment')
            },
            {
                path:'/giveMarks/:id',
                element:<PrivateRoute>
                    <GiveMark></GiveMark>
                </PrivateRoute>,
                loader:({params})=>fetch(`https://job-assessment-project-server2.vercel.app/submittedAssignment/${params.id}`)

            },
             {
                path:"/terms",
                element: <Terms></Terms>
            },
             {
                path:"/contact",
                element: <ContactInfo></ContactInfo>
            },
            {
                path:'/*',
                element:<ErrorPage></ErrorPage>
            },
            {
                path:'/updateAssignment/:id',
                element:<PrivateRoute>
                    <UpdateAssignment></UpdateAssignment>
                </PrivateRoute>,
                loader:({params})=>fetch(`https://job-assessment-project-server2.vercel.app/assignments/${params.id}`)
            }
           
        ]
    }
])