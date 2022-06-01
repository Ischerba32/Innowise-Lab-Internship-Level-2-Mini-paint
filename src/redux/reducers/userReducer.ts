import User, { UserAction } from '../../interfaces/user.interface';
import { ActionTypes } from '../actionTypes';

const initialState: User = {
	uid: '',
	email: '',
	error: '',
};

export const userReducer = (state = initialState, action: UserAction): User => {
	switch (action.type) {
		case ActionTypes.SIGN_IN:
			return { ...state };
		case ActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				uid: action.payload.uid,
				email: action.payload.email,
				error: '',
			};
		case ActionTypes.SIGN_IN_ERROR:
			return { ...state, error: action.payload.message };
		default:
			return state;
	}
};
