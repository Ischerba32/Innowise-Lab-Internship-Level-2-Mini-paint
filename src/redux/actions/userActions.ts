import AuthFormParams from '../../interfaces/authForm.interface';
import User, { UserAction } from '../../interfaces/user.interface';
import { ActionTypes } from '../actionTypes';

export const signIn = (payload: AuthFormParams): UserAction => {
	return { type: ActionTypes.SIGN_IN, payload };
};

export const signInSuccess = (payload: User): UserAction => {
	return { type: ActionTypes.SIGN_IN_SUCCESS, payload };
};

export const signInError = (payload: Error): UserAction => {
	return { type: ActionTypes.SIGN_IN_ERROR, payload };
};

export const signUp = (payload: AuthFormParams): UserAction => {
	return { type: ActionTypes.SIGN_UP, payload };
};

export const signOut = (): UserAction => {
	return { type: ActionTypes.SIGN_OUT };
};
