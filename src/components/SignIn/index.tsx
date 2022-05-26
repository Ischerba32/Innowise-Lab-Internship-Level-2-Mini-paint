import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import AuthFormParams from '../../interfaces/authForm.interface';
import AuthForm from '../AuthForm';

const SignIn = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const authCheck = onAuthStateChanged(auth, (user) => {
			if (user) navigate('/');
		});
		authCheck();
	}, [navigate]);

	const handleSignIn = async ({ email, password }: AuthFormParams) => {
		await signInWithEmailAndPassword(auth, email, password);
		navigate('/');
	};

	return (
		<>
			<AuthForm
				onSubmit={handleSignIn}
				formAction='SignIn'
				actionLink='/signup'
				actionTitle='SignUp'
			/>
		</>
	);
};

export default SignIn;
