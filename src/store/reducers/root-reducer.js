import { combineReducers } from 'redux';
import { postsReducer } from './posts-reducer';
import { usersReducer } from './users-reducer';
import { userReducer } from './user-reducer';
export const rootReducer = combineReducers({
	posts: postsReducer,
	users: usersReducer,
	user: userReducer,
});
