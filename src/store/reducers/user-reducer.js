const initialState = {
	login: '',
	role_id: null,
};
export const userReducer = (state = initialState, action) => {
	console.log('userReducer called with', action);
	switch (action.type) {
		case 'SET_USER':
			return action.payload;

		default:
			return state;
	}
};
