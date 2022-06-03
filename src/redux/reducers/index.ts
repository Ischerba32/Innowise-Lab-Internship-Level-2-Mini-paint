import { combineReducers } from 'redux';
import { canvasReducer } from './canvasReducer';
import { imagesReducer } from './imagesReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	images: imagesReducer,
	canvas: canvasReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
