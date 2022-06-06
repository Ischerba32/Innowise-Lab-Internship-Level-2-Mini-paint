import { combineReducers } from 'redux';
import { canvasReducer } from './canvasReducer';
import { filterReducer } from './filterReducer';
import { imagesReducer } from './imagesReducer';
import { themeReducer } from './themeReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	images: imagesReducer,
	filter: filterReducer,
	canvas: canvasReducer,
	theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
