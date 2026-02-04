import { useDispatch, useSelector } from 'react-redux';
import { loadUsers, loadRoles, saveUser, deleteUser } from './thunks';
export const useStateBlog = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users);
	const user = useSelector((state) => state.user);
	const roles = useSelector((state) => state.roles);

	return {
		roles: roles,
		users: users,
		currentUser: user,
		loadUsers: () => dispatch(loadUsers()),
		loadRoles: () => dispatch(loadRoles()),
		loginUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
		logoutUser: () => dispatch({ type: 'CLEAR_USER' }),
		setUserRole: (userId, roleId) =>
			dispatch({ type: 'SET_USER_ROLE', payload: { userId, roleId } }),
		saveUser: (user) => dispatch(saveUser(user)),
		deleteUser: (userId) => dispatch(deleteUser(userId)),
	};
};
