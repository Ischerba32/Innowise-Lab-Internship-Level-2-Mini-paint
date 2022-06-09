import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { auth } from '../../config/firebase';
import { useTheme } from '../../hooks/useTheme';
import AuthFormParams from '../../interfaces/authForm.interface';
import State from '../../interfaces/state.interface';
import { clearError, signUp } from '../../redux/slices/userSlice';
import AuthForm from '../AuthForm';

const SignUp = () => {
	const { error, uid } = useSelector((state: State) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { theme } = useTheme();

	useEffect(() => {
		const authCheck = onAuthStateChanged(auth, (user) => {
			if (user) navigate('/');
		});
		authCheck();
	}, [navigate, uid]);

	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch(clearError());
		}
	}, [error, dispatch]);

	const handleSignUp = async ({ email, password }: AuthFormParams) => {
		dispatch(signUp({ email, password }));
	};

	return (
		<>
			<AuthForm
				onSubmit={handleSignUp}
				formAction='SignUp'
				actionLink='/signin'
				actionTitle='Back to SignIn'
			/>
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme={theme === 'light' ? 'light' : 'dark'}
			/>
		</>
	);
};

export default SignUp;
