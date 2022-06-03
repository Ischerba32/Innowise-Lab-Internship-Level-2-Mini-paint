import { ActionTypes } from '../redux/actions/actionTypes';

export default interface Image {
	date: string;
	image: string;
	userId: string;
	imageId: string;
}

export interface SaveImageParams {
	blob: Blob;
	imageId: string;
	uid: string;
}

interface SetImagesAction {
	type: ActionTypes.SET_IMAGES;
	payload: Image[];
}

interface GetImagesAction {
	type: ActionTypes.GET_IMAGES;
}

interface GetImagesSuccessAction {
	type: ActionTypes.GET_IMAGES_SUCCESS;
}

interface SaveImageAction {
	type: ActionTypes.SAVE_IMAGE;
	payload: SaveImageParams;
}

export type ImagesAction =
	| GetImagesAction
	| GetImagesSuccessAction
	| SetImagesAction
	| SaveImageAction;
