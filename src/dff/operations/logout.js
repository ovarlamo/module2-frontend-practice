import { sessions } from '../sessions';
export function logout(user) {
	sessions.remove(user);
}
