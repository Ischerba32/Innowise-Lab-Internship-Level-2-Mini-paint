import AuthFormParams from '../../../interfaces/authForm.interface';
import User, { UserAction } from '../../../interfaces/user.interface';
import { ActionTypes } from '../actionTypes';

export const signInAction = (payload: AuthFormParams): UserAction => {
	return { type: ActionTypes.SIGN_IN, payload };
};

export const signInSuccessAction = (payload: User): UserAction => {
	return { type: ActionTypes.SIGN_IN_SUCCESS, payload };
};

export const authErrorAction = (payload: Error): UserAction => {
	return { type: ActionTypes.AUTH_ERROR, payload };
};

export const clearErrorAction = (): UserAction => {
	return { type: ActionTypes.CLEAR_ERROR };
};

export const signUpAction = (payload: AuthFormParams): UserAction => {
	return { type: ActionTypes.SIGN_UP, payload };
};

export const signUpSuccessAction = (payload: User): UserAction => {
	return { type: ActionTypes.SIGN_UP_SUCCESS, payload };
};

export const signOutAction = (): UserAction => {
	return { type: ActionTypes.SIGN_OUT };
};

export const signOutSuccessAction = (): UserAction => {
	return { type: ActionTypes.SIGN_OUT_SUCCESS };
};

export const checkAuthAction = (): UserAction => {
	return { type: ActionTypes.CHECK_AUTH };
};

export const checkAuthSuccessAction = (payload: User): UserAction => {
	return { type: ActionTypes.CHECK_AUTH_SUCCESS, payload };
};
