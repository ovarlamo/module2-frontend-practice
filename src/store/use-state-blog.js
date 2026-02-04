import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from './thunks';
export const useStateBlog = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users);
	const user = useSelector((state) => state.user);

	return {
		users: users,
		currentUser: user,
		loadUsers: () => dispatch(loadUsers()),
		loginUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
		logoutUser: () => dispatch({ type: 'CLEAR_USER' }),
	};
};
