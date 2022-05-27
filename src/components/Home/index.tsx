import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { Header } from '../Header';
import ImagesList from '../Images/ImagesList';
import { Button } from '../UI';

const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<Header />
			<ImagesList />
		</>
	);
};

export default Home;
