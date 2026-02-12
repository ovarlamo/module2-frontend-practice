import { Api } from '../dff/api';

export const loadUsers = () => {
	return async (dispatch) => {
		const users = await Api.fetchUsers();
		dispatch({ type: 'SET_USERS', payload: users });
	};
};
export const loadRoles = () => {
	return async (dispatch) => {
		const roles = await Api.fetchRoles();
		dispatch({ type: 'SET_ROLES', payload: roles });
	};
};
export const saveUser = (user) => {
	return async (dispatch) => {
		console.log('Thunk saveUser called with', user);
		await Api.saveUser(user);
		dispatch({ type: 'SAVE_USER', payload: user });
	};
};
export const deleteUser = (userId) => {
	return async (dispatch) => {
		await Api.deleteUser(userId);
		dispatch({ type: 'DELETE_USER', payload: { id: userId } });
	};
};
export const deletePost = (postId) => {
	return async (dispatch) => {
		await Api.deletePost(postId);
		dispatch({ type: 'REMOVE_POST', payload: { id: postId } });
	};
};
export const savePost = (post) => {
	return async (dispatch) => {
		await Api.savePost(post);
		dispatch({ type: 'UPDATE_POST', payload: post });
	};
};
export const createUser = (login, password) => {
	return async (dispatch) => {
		const user = await Api.createUser(login, password);
		dispatch({ type: 'ADD_USER', payload: user });
	};
};
export const updateUserRole = (userId, roleId) => {
	return async (dispatch) => {
		await Api.updateUser(userId, 'role_id', roleId);
		dispatch({ type: 'SET_USER_ROLE', payload: { userId, roleId } });
	};
};
