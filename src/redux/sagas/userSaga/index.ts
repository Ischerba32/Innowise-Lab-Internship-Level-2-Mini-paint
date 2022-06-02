import { AnyAction } from 'redux';
import { all, put, takeEvery } from 'redux-saga/effects';
import {
	handleSignIn,
	handleSignOut,
	handleSignUp,
} from '../../../config/firebase';
import {
	signInErrorAction,
	signInSuccessAction,
	signOutErrorAction,
	signOutSuccessAction,
	signUpErrorAction,
	signUpSuccessAction,
} from '../../actions/userActions';
import { ActionTypes } from '../../actionTypes';

export function* signInWorker(data: AnyAction) {
	const { payload } = data;

	try {
		const { user } = yield handleSignIn(payload);
		if (user.uid && user?.email) {
			yield put(signInSuccessAction({ uid: user.uid, email: user?.email }));
		}
	} catch (error) {
		yield put(signInErrorAction(error as Error));
	}
}

export function* signUpWorker(data: AnyAction) {
	const { payload } = data;

	try {
		const { user } = yield handleSignUp(payload);
		if (user.uid && user?.email) {
			yield put(signUpSuccessAction({ uid: user.uid, email: user?.email }));
		}
	} catch (error) {
		yield put(signUpErrorAction(error as Error));
	}
}

export function* signOutWorker() {
	try {
		yield handleSignOut();
		yield put(signOutSuccessAction());
	} catch (error) {
		put(signOutErrorAction(error as Error));
	}
}

export function* signInWatcher() {
	yield takeEvery(ActionTypes.SIGN_IN, signInWorker);
}

export function* signUpWatcher() {
	yield takeEvery(ActionTypes.SIGN_UP, signUpWorker);
}

export function* signOutWatcher() {
	yield takeEvery(ActionTypes.SIGN_OUT, signOutWorker);
}

export default function* userSaga() {
	yield all([signOutWatcher(), signInWatcher(), signUpWatcher()]);
}