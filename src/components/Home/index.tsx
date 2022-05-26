import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { Header } from '../Header';
import { Button } from '../UI';

const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<Header />
		</>
	);
};

export default Home;
