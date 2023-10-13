import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import Users from "../components/Users/Users";
import Update from "../components/Update/Update";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/users',
                element: <Users></Users>,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/users/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
            }
        ]
    }
    
])

export default Routes;