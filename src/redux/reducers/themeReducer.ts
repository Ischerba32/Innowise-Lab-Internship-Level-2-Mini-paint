import ThemeState, { ThemeAction } from '../../interfaces/theme.interface';
import { ActionTypes } from '../actions/actionTypes';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

const initialState: ThemeState = {
	theme: localStorage.getItem('app-theme') || defaultTheme,
};

export const themeReducer = (
	state = initialState,
	{ type, payload }: ThemeAction
): ThemeState => {
	switch (type) {
		case ActionTypes.SET_THEME:
			return { ...state, theme: payload };
		default:
			return state;
	}
};
