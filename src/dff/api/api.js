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
	updateUser: async (userId, fld, value) => {
		const response = await fetch(`${EndPoint}/users/${userId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ fld: value }),
		});
		return response.json();
	},
	fetchPosts: async (searchStr = '') => {
		const response = await fetch(`${EndPoint}/posts?title_like=${searchStr}`);
		return response.json();
	},
	fetchPost: async (id) => {
		const response = await fetch(`${EndPoint}/posts?id=${id}`);
		const posts = await response.json();
		return posts[0];
	},
	deletePost: async (postId) => {
		const response = await fetch(`${EndPoint}/posts/${postId}`, {
			method: 'DELETE',
		});
		return response.json();
	},
	savePost: async (post) => {
		console.log('API savePost called with', post);
		const response = await fetch(`${EndPoint}/posts/${post.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(post),
		});
		return response.json();
	},
	createPost: async (post) => {
		const response = await fetch(`${EndPoint}/posts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(post),
		});
		return response.json();
	},
	fetchComments: async (postId) => {
		const response = await fetch(`${EndPoint}/comments?post_id=${postId}`);
		return response.json();
	},
	createComment: async (postId, commentText, login) => {
		const response = await fetch(`${EndPoint}/comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				body: commentText,
				post_id: postId,
				login: login,
				created_at: new Date().toDateString(),
			}),
		});
		return response.json();
	},
	deleteComment: async (id) => {
		const response = await fetch(`${EndPoint}/comments/${id}`, {
			method: 'DELETE',
		});
		return response.json();
	},
};
