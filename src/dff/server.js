import { Api } from '../dff/api';

function getUser(login) {
	return Api.fetchUserByLogin(login);
}

export const server = {
	async registration(regLogin, regPassword) {
		const user = await getUser(regLogin);
		if (user) {
			return {
				error: 'Такой логин уже существует',
				res: null,
			};
		}
		const newUser = await Api.createUser({
			login: regLogin,
			password: regPassword,
			role_id: 3,
			registed_at: new Date().toLocaleDateString(),
		});
		if (!newUser) {
			return { error: 'Пользователь не создан', res: null };
		}
		return { error: null, res: { ...newUser } };
	},
	async authorize(authLogin, authPassword) {
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
