import FilterState, { FilterAction } from '../../interfaces/filter.interface';
import { ActionTypes } from '../actions/actionTypes';

const initialState: FilterState = {
	user: 'all',
};

export const filterReducer = (
	state = initialState,
	{ type, payload }: FilterAction
): FilterState => {
	switch (type) {
		case ActionTypes.IMAGES_FILTER:
			return { ...state, user: payload };
		default:
			return state;
	}
};
