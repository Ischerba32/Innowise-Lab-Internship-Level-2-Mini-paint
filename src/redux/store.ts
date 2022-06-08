import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import imagesReducer from './slices/imagesSlice';
import filterReducer from './slices/filterSlice';
import canvasReducer from './slices/canvasSlice';
import themeReducer from './slices/themeSlice';
import menuReducer from './slices/menuSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		user: userReducer,
		images: imagesReducer,
		filter: filterReducer,
		canvas: canvasReducer,
		theme: themeReducer,
		burgerMenu: menuReducer,
	},
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
