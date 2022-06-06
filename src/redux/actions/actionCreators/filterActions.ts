import { FilterAction } from '../../../interfaces/filter.interface';
import { ActionTypes } from '../actionTypes';

export const filterImagesAction = (payload: string): FilterAction => {
	return { type: ActionTypes.IMAGES_FILTER, payload };
};
