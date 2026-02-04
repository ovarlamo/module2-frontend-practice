const EndPoint = 'http://localhost:3005';
export const Api = {
	fetchUsers: async () => {
		const response = await fetch(`${EndPoint}/users`);
		return response.json();
	},
	fetchPosts: async () => {
		const response = await fetch(`${EndPoint}/posts`);
		return response.json();
	},
};
