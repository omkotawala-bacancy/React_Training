import withAuth from "../components/withAuth"
import DashboardPage from "./DashboardPage"

export const ProtectedDashboard = withAuth(DashboardPage)