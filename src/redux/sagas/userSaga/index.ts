import { AnyAction } from 'redux';
import { put, takeEvery } from 'redux-saga/effects';
import { handleSignIn } from '../../../config/firebase';
import User from '../../../interfaces/user.interface';
import { signInError, signInSuccess } from '../../actions/userActions';
import { ActionTypes } from '../../actionTypes';

export function* signInWorker(data: AnyAction) {
	const { payload } = data;
	const auth: User = {
		uid: '',
		email: '',
	};

	try {
		const { user } = yield handleSignIn(payload);
		if (user.uid && user?.email) {
			auth.uid = user.uid;
			auth.email = user?.email;
			yield put(signInSuccess(auth));
		}
	} catch (error) {
		yield put(signInError(error as Error));
	}
}

export function* signInWatcher() {
	yield takeEvery(ActionTypes.SIGN_IN, signInWorker);
}

export default function* userSaga() {
	yield signInWatcher();
}
