import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import AuthForm from '../../components/AuthForm';
import { auth } from '../../config/firebase';
import { useTheme } from '../../hooks/useTheme';
import AuthFormParams from '../../interfaces/authForm.interface';
import State from '../../interfaces/state.interface';
import { clearError, signIn } from '../../redux/slices/userSlice';

const SignIn = () => {
	const { error, uid } = useSelector((state: State) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { theme } = useTheme();

	useEffect(() => {
		return onAuthStateChanged(auth, (user) => {
			if (user) navigate('/');
		});
	}, [navigate, uid]);

	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch(clearError());
		}
	}, [error, dispatch]);

	const handleSignIn = async ({ email, password }: AuthFormParams) => {
		dispatch(signIn({ email, password }));
	};

	return (
		<>
			<AuthForm
				onSubmit={handleSignIn}
				formAction='SignIn'
				actionLink='/signup'
				actionTitle='SignUp'
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

export default SignIn;
