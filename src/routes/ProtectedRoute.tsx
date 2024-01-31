import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  // const { currentUser } = useContext(AuthContext);
  const token = localStorage.getItem("accessToken");

  // Check if currentUser exists and has necessary properties (adjust this based on your implementation)
  console.log(token)
  if (!token) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/auth/login" replace />;
  }

  // Render the child routes using Outlet if the user is authenticated
  return <Outlet />;
}

export default ProtectedRoute;
