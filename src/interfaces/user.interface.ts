import { ActionTypes } from '../redux/actions/actionTypes';
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

interface SignUpAction {
	type: ActionTypes.SIGN_UP;
	payload: AuthFormParams;
}

interface SignUpSuccessAction {
	type: ActionTypes.SIGN_UP_SUCCESS;
	payload: User;
}

interface SignOutAction {
	type: ActionTypes.SIGN_OUT;
}

interface SignOutSuccessAction {
	type: ActionTypes.SIGN_OUT_SUCCESS;
}

interface AuthError {
	type: ActionTypes.AUTH_ERROR;
	payload: Error;
}

interface ClearError {
	type: ActionTypes.CLEAR_ERROR;
}

// interface CheckAuthAction {
// 	type: ActionTypes.CHECK_AUTH;
// }
interface CheckAuthSuccessAction {
	type: ActionTypes.CHECK_AUTH_SUCCESS;
	payload: User;
}

export type UserAction =
	| SignInAction
	| SignInSuccessAction
	| SignUpAction
	| SignUpSuccessAction
	| SignOutAction
	| SignOutSuccessAction
	| AuthError
	| ClearError
	| CheckAuthSuccessAction;
