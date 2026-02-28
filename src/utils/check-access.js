import { ROLES } from '../constants';
export const checkAccess = (TARGET, role_id) => {
	switch (TARGET) {
		case 'ROLES':
			if (role_id === ROLES.ADMIN) return true;
			break;

		case 'DELETE_COMMENT':
			if (role_id === ROLES.ADMIN || role_id === ROLES.MODERATOR) return true;
			break;
		case 'EDIT_POST':
			if (role_id === ROLES.ADMIN) return true;
		default:
			return false;
	}
	return false;
};
