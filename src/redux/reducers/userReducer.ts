import User, { UserAction } from '../../interfaces/user.interface';
import { ActionTypes } from '../actions/actionTypes';

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

		case ActionTypes.SIGN_UP:
			return { ...state };
		case ActionTypes.SIGN_UP_SUCCESS:
			return {
				...state,
				uid: action.payload.uid,
				email: action.payload.email,
				error: '',
			};

		case ActionTypes.SIGN_OUT:
			return { ...state };
		case ActionTypes.SIGN_OUT_SUCCESS:
			return { ...state, uid: '', email: '' };

		case ActionTypes.AUTH_ERROR:
			return { ...state, error: action.payload.message };
		case ActionTypes.CLEAR_ERROR:
			return { ...state, error: '' };

		case ActionTypes.CHECK_AUTH:
			return { ...state };
		case ActionTypes.CHECK_AUTH_SUCCESS:
			return {
				...state,
				uid: action.payload.uid,
				email: action.payload.email,
				error: '',
			};
		default:
			return state;
	}
};
