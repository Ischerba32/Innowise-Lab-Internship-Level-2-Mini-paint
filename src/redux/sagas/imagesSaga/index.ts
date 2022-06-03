import { AnyAction } from 'redux';
import { all, takeEvery } from 'redux-saga/effects';
import { handleSaveImage } from '../../../config/firebase';
import { ActionTypes } from '../../actions/actionTypes';

export function* saveImageWorker(data: AnyAction) {
	const { payload } = data;
	try {
		yield handleSaveImage(payload);
		yield console.log('Image saved successfully');
	} catch (error) {
		console.error(error as Error);
	}
}

export function* saveImageWatcher() {
	yield takeEvery(ActionTypes.SAVE_IMAGE, saveImageWorker);
}

export default function* imagesSaga() {
	yield all([saveImageWatcher()]);
}
