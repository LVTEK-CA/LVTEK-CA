import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import Layout from "./components/layout.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: 'home',
                Component: HomePage,
            },
            {
                index: true,
                element: <Navigate to={'/home'}/>,
            },
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
