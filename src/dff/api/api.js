const EndPoint = 'http://localhost:3005';
export const Api = {
	fetchUsers: async () => {
		const response = await fetch(`${EndPoint}/users`);
		return response.json();
	},
	fetchUserByLogin: async (login) => {
		const resp = await fetch(`${EndPoint}/users?login=${login}`);
		const users = await resp.json();
		return users[0];
	},

	fetchPosts: async () => {
		const response = await fetch(`${EndPoint}/posts`);
		return response.json();
	},
	fetchRoles: async () => {
		const response = await fetch(`${EndPoint}/roles`);
		return response.json();
	},
	saveUser: async (user) => {
		console.log('API saveUser called with', user);
		const response = await fetch(`${EndPoint}/users/${user.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		return response.json();
	},
	createUser: async (user) => {
		const response = await fetch(`${EndPoint}/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		return response.json();
	},
	deleteUser: async (userId) => {
		const response = await fetch(`${EndPoint}/users/${userId}`, {
			method: 'DELETE',
		});
		return response.json();
	},
};
