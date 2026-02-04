const initialState = [];
export const rolesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_ROLES':
			return action.payload;
		default:
			return state;
	}
};
