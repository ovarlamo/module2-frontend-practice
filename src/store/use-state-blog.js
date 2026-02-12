import { useDispatch, useSelector } from 'react-redux';
import {
	loadUsers,
	loadRoles,
	saveUser,
	deleteUser,
	createUser,
	updateUserRole,
	savePost,
	deletePost,
} from './thunks';
import { checkAccess } from '../utils/check-access';
export const useStateBlog = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users);
	const currentUser = useSelector((state) => state.user);
	const roles = useSelector((state) => state.roles);

	return {
		roles: roles,
		users: users,
		currentUser,
		loadUsers: () => dispatch(loadUsers()),
		loadRoles: () => {
			if (checkAccess('ROLES', currentUser.role_id)) return dispatch(loadRoles());
			else {
				console.log('недостаточно прав ');
				return false;
			}
		},
		loginUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
		logoutUser: () => dispatch({ type: 'CLEAR_USER' }),
		updateUserRole: (userId, roleId) => dispatch(updateUserRole(userId, roleId)),
		saveUser: (user) => dispatch(saveUser(user)),
		deleteUser: (userId) => dispatch(deleteUser(userId)),
		createUser: (login, password) => dispatch(createUser(login, password)),
		updatePost: (post) => dispatch(savePost(post)),
		removePost: (postId) => dispatch(deletePost(postId)),
	};
};
