import { ActionTypes } from '../actionTypes';
import Image, {
	ImagesAction,
	SaveImageParams,
} from '../../../interfaces/image.interface';

export const setImagesAction = (payload: Image[]): ImagesAction => {
	return { type: ActionTypes.SET_IMAGES, payload };
};

export const getImagesAction = (): ImagesAction => {
	return { type: ActionTypes.GET_IMAGES };
};

export const getImagesSuccessAction = (): ImagesAction => {
	return { type: ActionTypes.GET_IMAGES_SUCCESS };
};

export const saveImageAction = (payload: SaveImageParams): ImagesAction => {
	return { type: ActionTypes.SAVE_IMAGE, payload };
};
