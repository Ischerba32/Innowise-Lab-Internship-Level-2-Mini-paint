import { ActionTypes } from '../redux/actionTypes';
import AuthFormParams from './authForm.interface';

export default interface User {
	uid: string;
	email: string | null;
	error?: string | null;
}

interface SignInAction {
	type: ActionTypes.SIGN_IN;
	payload: AuthFormParams;
}

interface SignInSuccessAction {
	type: ActionTypes.SIGN_IN_SUCCESS;
	payload: User;
}

interface SignInErrorAction {
	type: ActionTypes.SIGN_IN_ERROR;
	payload: Error;
}

interface SignUpAction {
	type: ActionTypes.SIGN_UP;
	payload: AuthFormParams;
}

interface SignUpSuccessAction {
	type: ActionTypes.SIGN_UP_SUCCESS;
	payload: User;
}

interface SignUpErrorAction {
	type: ActionTypes.SIGN_UP_ERROR;
	payload: Error;
}

interface SignOutAction {
	type: ActionTypes.SIGN_OUT;
}

interface SignOutSuccessAction {
	type: ActionTypes.SIGN_OUT_SUCCESS;
}

interface SignOutErrorAction {
	type: ActionTypes.SIGN_OUT_ERROR;
	payload: Error;
}

interface CheckAuthAction {
	type: ActionTypes.CHECK_AUTH;
}
interface CheckAuthSuccessAction {
	type: ActionTypes.CHECK_AUTH_SUCCESS;
	payload: User;
}

export type UserAction =
	| SignInAction
	| SignInSuccessAction
	| SignInErrorAction
	| SignUpAction
	| SignUpSuccessAction
	| SignUpErrorAction
	| SignOutAction
	| SignOutSuccessAction
	| SignOutErrorAction
	| CheckAuthAction
	| CheckAuthSuccessAction;
