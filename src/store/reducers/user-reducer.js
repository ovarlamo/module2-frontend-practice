const initialState = {
	login: '',
	role_id: null,
	id: null,
	registed_at: null,
};
export const userReducer = (state = initialState, action) => {
	console.log('userReducer called with', action);
	switch (action.type) {
		case 'SET_USER':
			return { ...state, ...action.payload };

		default:
			return state;
	}
};
