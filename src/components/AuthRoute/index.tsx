import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { AuthContext } from '../../context/auth.context';
import User from '../../interfaces/user.interface';
import AuthRouteProps from './props';

const AuthRoute = ({ children }: AuthRouteProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState<User>({ uid: '', email: '' });

	const navigate = useNavigate();

	useEffect(() => {
		const authCheck = onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsLoading(false);
				setUser({
					uid: user.uid,
					email: user?.email,
				});
			} else {
				console.log('Unauthorized');
				setUser({
					uid: '',
					email: '',
				});

				navigate('/signin');
			}
		});

		authCheck();
	}, [navigate]);

	if (isLoading) return <p>Loading...</p>;

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthRoute;
