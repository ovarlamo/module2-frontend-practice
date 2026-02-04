const initialState = [];
export const usersReducer = (state = initialState, action) => {
	console.log('usersReducer called with', action);
	switch (action.type) {
		case 'SET_USERS':
			return action.payload;

		default:
			return state;
	}
};
