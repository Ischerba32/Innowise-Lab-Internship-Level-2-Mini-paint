import { ActionTypes } from '../redux/actions/actionTypes';

export default interface FilterState {
	user: string;
}

interface FilterImageAction {
	type: ActionTypes.IMAGES_FILTER;
	payload: string;
}

export type FilterAction = FilterImageAction;
