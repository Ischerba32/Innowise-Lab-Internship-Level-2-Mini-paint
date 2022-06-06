import { combineReducers } from 'redux';
import { canvasReducer } from './canvasReducer';
import { filterReducer } from './filterReducer';
import { imagesReducer } from './imagesReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	images: imagesReducer,
	filter: filterReducer,
	canvas: canvasReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
