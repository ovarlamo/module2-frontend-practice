import { Api } from '../api';
import { ROLES } from '../../constants';

export async function registrate(regLogin, regPassword) {
	const user = await Api.fetchUserByLogin(regLogin);
	if (user) {
		return {
			error: 'Такой логин уже существует',
			res: null,
		};
	}
	const newUser = await Api.createUser({
		login: regLogin,
		password: regPassword,
		role_id: ROLES.GUEST,
		registed_at: new Date().toLocaleDateString(),
	});
	if (!newUser) {
		return { error: 'Пользователь не создан', res: null };
	}
	return { error: null, res: { ...newUser } };
}
