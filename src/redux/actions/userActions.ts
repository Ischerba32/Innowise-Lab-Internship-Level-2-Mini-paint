import AuthFormParams from '../../interfaces/authForm.interface';
import User, { UserAction } from '../../interfaces/user.interface';
import { ActionTypes } from '../actionTypes';

export const signInAction = (payload: AuthFormParams): UserAction => {
	return { type: ActionTypes.SIGN_IN, payload };
};

export const signInSuccessAction = (payload: User): UserAction => {
	return { type: ActionTypes.SIGN_IN_SUCCESS, payload };
};

export const signInErrorAction = (payload: Error): UserAction => {
	return { type: ActionTypes.SIGN_IN_ERROR, payload };
};

export const signUpAction = (payload: AuthFormParams): UserAction => {
	return { type: ActionTypes.SIGN_UP, payload };
};

export const signUpSuccessAction = (payload: User): UserAction => {
	return { type: ActionTypes.SIGN_UP_SUCCESS, payload };
};

export const signUpErrorAction = (payload: Error): UserAction => {
	return { type: ActionTypes.SIGN_UP_ERROR, payload };
};

export const signOutAction = (): UserAction => {
	return { type: ActionTypes.SIGN_OUT };
};

export const signOutSuccessAction = (): UserAction => {
	return { type: ActionTypes.SIGN_OUT_SUCCESS };
};

export const signOutErrorAction = (payload: Error): UserAction => {
	return { type: ActionTypes.SIGN_OUT_ERROR, payload };
};

export const checkAuthAction = (): UserAction => {
	return { type: ActionTypes.CHECK_AUTH };
};

export const checkAuthSuccessAction = (payload: User): UserAction => {
	return { type: ActionTypes.CHECK_AUTH_SUCCESS, payload };
};
