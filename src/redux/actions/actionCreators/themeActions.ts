import { ThemeAction } from '../../../interfaces/theme.interface';
import { ActionTypes } from '../actionTypes';

export const setThemeAction = (payload: string): ThemeAction => {
	return { type: ActionTypes.SET_THEME, payload };
};
