import Image, { ImagesAction } from '../../interfaces/image.interface';
import { ActionTypes } from '../actions/actionTypes';

export interface ImageState {
	isLoading: boolean;
	images: Image[];
}

const initialState: ImageState = {
	isLoading: false,
	images: [],
};

export const imagesReducer = (
	state = initialState,
	action: ImagesAction
): ImageState => {
	switch (action.type) {
		case ActionTypes.GET_IMAGES:
			return { ...state, isLoading: true };
		case ActionTypes.GET_IMAGES_SUCCESS:
			return { ...state, isLoading: false };
		case ActionTypes.SET_IMAGES:
			return { ...state, images: action.payload };
		default:
			return state;
	}
};
