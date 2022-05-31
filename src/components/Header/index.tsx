import { HeaderProps } from './props';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { Button, Htag } from '../UI';
import CustomSelect from '../Select';
import { useState } from 'react';
import { SingleValue } from 'react-select';
import { OptionParams } from '../Select/props';

// Mocked users for select
const OPTIONS = [
	{ value: '6QkuyVeAACTtR72iC83z4NMzCIy1', label: 'i.scherba32@gmail.com' },
	{ value: '6QkefVeAACTtR7weiC83z4NwezCIy1', label: 'test@test.tt' },
	{ value: 'all', label: 'all' },
];

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [activeUser, setActiveUser] = useState('all');
	const navigate = useNavigate();

	const handleClickButton = () => {
		signOut(auth);
		navigate('/signin');
	};

	const handleChangeSelect = (newValue: SingleValue<string | OptionParams>) => {
		setActiveUser((newValue as OptionParams).value);
	};

	return (
		<header className={cn(className, styles.header)} {...props}>
			<div>
				<Link to='/'>
					<Htag tag='h3'>Mini-paint</Htag>
				</Link>
			</div>
			<div className={styles.header__actions}>
				<CustomSelect options={OPTIONS} onChange={handleChangeSelect} />
				<Button appearance='primary' onClick={handleClickButton}>
					SignOut
				</Button>
			</div>
		</header>
	);
};
