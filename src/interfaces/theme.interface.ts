import { ActionTypes } from '../redux/actions/actionTypes';

export default interface ThemeState {
	theme: string;
}

export interface SetThemeAction {
	type: ActionTypes.SET_THEME;
	payload: string;
}

export type ThemeAction = SetThemeAction;
