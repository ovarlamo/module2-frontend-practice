import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from './thunks';
export const useStateBlog = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users);
	const user = useSelector((state) => state.user);
	console.log('useStateBlog', users.length, user);
	return {
		users: users,
		currentUser: user,
		loadUsers: () => dispatch(loadUsers()),
		setCurrentUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
	};
};
