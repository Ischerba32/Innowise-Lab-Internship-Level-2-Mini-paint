import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import AuthFormParams from '../../interfaces/authForm.interface';
import AuthForm from '../AuthForm';

const SignUp = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const authCheck = onAuthStateChanged(auth, (user) => {
			if (user) navigate('/');
		});
		authCheck();
	}, [navigate]);

	const handleSignUp = async ({ email, password }: AuthFormParams) => {
		await createUserWithEmailAndPassword(auth, email, password);
		navigate('/');
	};

	return (
		<>
			<AuthForm
				onSubmit={handleSignUp}
				formAction='SignUp'
				actionLink='/signin'
				actionTitle='Back to SignIn'
			/>
		</>
	);
};

export default SignUp;
