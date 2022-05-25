import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { Button } from '../UI';

const Home = () => {
	const navigate = useNavigate();

	const handleClickButton = () => {
		signOut(auth);
		navigate('/signin');
	};

	return (
		<>
			<div>Home</div>
			<Button appearance='primary' onClick={handleClickButton}>
				Log Out
			</Button>
		</>
	);
};

export default Home;
