const initialState = [];
export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USERS':
			return action.payload;
		case 'SET_USER_ROLE':
			return state.map((user) =>
				user.id === action.payload.userId
					? { ...user, role_id: action.payload.roleId }
					: user,
			);
		case 'SAVE_USER':
			return state.map((user) =>
				user.id === action.payload.id ? { ...user, ...action.payload } : user,
			);
		case 'DELETE_USER':
			return state.filter((user) => user.id !== action.payload.id);
		case 'ADD_USER':
			return [...state, ...action.payload];

		default:
			return state;
	}
};
