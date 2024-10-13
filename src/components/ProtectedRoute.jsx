import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  if (!props.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return props.children;
}

export default ProtectedRoute;
