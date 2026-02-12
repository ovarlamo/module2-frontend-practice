import { Api } from '../api';
import { sessions } from '../sessions';

export async function authorise(authLogin, authPassword) {
	const user = await Api.fetchUserByLogin(authLogin);
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
	const session = sessions.create(user);
	return {
		error: null,
		res: { ...user, session },
	};
}
