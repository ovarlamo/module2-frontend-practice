import { Api } from '../dff/api';

export const loadUsers = () => {
	return async (dispatch) => {
		const users = await Api.fetchUsers();
		dispatch({ type: 'SET_USERS', payload: users });
	};
};
