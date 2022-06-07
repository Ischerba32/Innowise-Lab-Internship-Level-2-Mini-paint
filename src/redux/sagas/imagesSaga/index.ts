import { AnyAction } from 'redux';
import { all, takeEvery } from 'redux-saga/effects';
import { handleSaveImage } from '../../../config/firebase';

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
	yield takeEvery('images/saveImage', saveImageWorker);
}

export default function* imagesSaga() {
	yield all([saveImageWatcher()]);
}
