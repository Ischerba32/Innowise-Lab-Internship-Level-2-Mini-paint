import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import State from '../../interfaces/state.interface';
import { checkAuthSuccessAction } from '../../redux/actions/userActions';
import AuthRouteProps from './props';

const AuthRoute = ({ children }: AuthRouteProps) => {
	const dispatch = useDispatch();
	const { uid } = useSelector((state: State) => state.user);

	const navigate = useNavigate();

	useEffect(() => {
		const authCheck = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(checkAuthSuccessAction({ uid: user.uid, email: user?.email }));
			} else {
				navigate('/signin');
			}
		});

		authCheck();
	}, [dispatch, navigate, uid]);

	return <>{children}</>;
};

export default AuthRoute;
