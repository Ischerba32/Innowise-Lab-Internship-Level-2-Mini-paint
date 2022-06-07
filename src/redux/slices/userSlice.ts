import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AuthFormParams from '../../interfaces/authForm.interface';
import User from '../../interfaces/user.interface';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		uid: '',
		email: '',
		isLoading: false,
		error: '',
	},
	reducers: {
		signIn: (state: User, action: PayloadAction<AuthFormParams>) => {
			state.isLoading = true;
		},
		signInSuccess: (state: User, action: PayloadAction<User>) => {
			state.uid = action.payload.uid;
			state.email = action.payload.email;
			state.isLoading = false;
			state.error = '';
		},

		signUp: (state: User, action: PayloadAction<AuthFormParams>) => {
			state.isLoading = true;
		},

		signUpSuccess: (state: User, action: PayloadAction<User>) => {
			state.uid = action.payload.uid;
			state.email = action.payload.email;
			state.isLoading = false;
			state.error = '';
		},

		signOut: (state: User) => {
			state.isLoading = true;
		},

		signOutSuccess: (state: User) => {
			state.isLoading = false;
			state.uid = '';
			state.email = '';
			state.error = '';
		},

		authError: (state: User, action: PayloadAction<Error>) => {
			state.error = action.payload.message;
		},

		clearError: (state: User) => {
			state.error = '';
		},

		checkAuth: (state: User) => {
			state.isLoading = true;
		},

		checkAuthSuccess: (state: User, action: PayloadAction<User>) => {
			state.uid = action.payload.uid;
			state.email = action.payload.email;
			state.isLoading = false;
			state.error = '';
		},

		checkAuthFailed: (state: User) => {
			state.isLoading = false;
		},
	},
});

export const {
	signIn,
	signInSuccess,
	signUp,
	signUpSuccess,
	signOut,
	signOutSuccess,
	authError,
	clearError,
	checkAuth,
	checkAuthSuccess,
	checkAuthFailed,
} = userSlice.actions;

export default userSlice.reducer;
