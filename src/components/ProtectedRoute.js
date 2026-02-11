import { Navigate } from 'react-router-dom';
import { useStateBlog } from '../store/use-state-blog';

export const ProtectedRoute = ({ children, requiredRole }) => {
	const { currentUser } = useStateBlog();
	const isAuthenticated = !!currentUser?.login;
	const hasRequiredRole = currentUser?.role_id === requiredRole;

	/* 	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	if (!hasRequiredRole) {
		return <Navigate to="/unauthorized" />;
	} */

	return children;
};
