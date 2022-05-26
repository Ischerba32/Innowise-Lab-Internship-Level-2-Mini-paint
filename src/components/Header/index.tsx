import { HeaderProps } from './props';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { Button, Htag } from '../UI';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const navigate = useNavigate();

	const handleClickButton = () => {
		signOut(auth);
		navigate('/signin');
	};

	return (
		<header className={cn(className, styles.header)} {...props}>
			<Link to='/'>
				<Htag tag='h3'>Mini-paint</Htag>
			</Link>
			<Button appearance='primary' onClick={handleClickButton}>
				SignOut
			</Button>
		</header>
	);
};
