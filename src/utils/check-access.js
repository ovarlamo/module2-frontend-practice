import { ROLES } from '../constants';
export const checkAccess = (TARGET, role_id) => {
	switch (TARGET) {
		case 'ROLES':
			if (role_id === ROLES.ADMIN) return true;
			break;
		default:
			return false;
	}
};
