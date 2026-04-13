import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Layout from '../Layout.jsx'
import HomePage from '../pages/HomePage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import ProtectedRoute from "./ProtectedRoute.jsx";
import RoleRoute from "./RoleRoute.jsx";
import Unauthorized from "../pages/Unauthorized.jsx";
import AdminPage from "../pages/AdminPage.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import { ProtectedDashboard } from "../pages/ProtectedDashboard.jsx";

const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/dashboard',
            element: <ProtectedDashboard />
          }
        ]
      },
      {
        element: <RoleRoute allowedRoles={['admin']} />,
        children: [
          {
            path: '/admin',
            element: <AdminPage />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <Unauthorized />
  }
])

export default router;