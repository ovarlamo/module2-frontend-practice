import { Api } from '../dff/api';
function getUsers() {
	return Api.fetchUsers();
}
async function getUser(login) {
	const users = await getUsers();
	const user = users.find((user) => user.login === login);
	return user;
}

export const server = {
	async authorize(authLogin, authPassword) {
		console.log('Server authorize called with', authLogin, authPassword);
		const user = await getUser(authLogin);
		if (!user) {
			return {
				error: 'Пользователь не найден',
				res: null,
			};
		}
		if (authPassword !== user.password) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}
		return {
			error: null,
			res: { ...user },
		};
	},
};
