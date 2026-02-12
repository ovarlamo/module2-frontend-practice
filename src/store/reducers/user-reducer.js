const initialState = {
	login: '',
	role_id: null,
	id: null,
	session: null,
};
export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER':
			return { ...state, ...action.payload };
		case 'CLEAR_USER':
			return { ...initialState };

		default:
			return state;
	}
};
