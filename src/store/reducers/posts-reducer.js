const initialState = [];
export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_POSTS':
			return action.payload;
		case 'REMOVE_POST':
			return state.filter((post) => post.id !== action.payload);
		case 'UPDATE_POST':
			return state.map((post) =>
				post.id !== action.payload.id ? post : { ...post, ...action.payload },
			);
		case 'ADD_POST':
			return [...state, action.payload];
		default:
			return state;
	}
};
