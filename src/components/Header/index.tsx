import { HeaderProps } from './props';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Htag } from '../UI';
import CustomSelect from '../Select';
import { useState } from 'react';
import { SingleValue } from 'react-select';
import { OptionParams } from '../Select/props';
import { useDispatch } from 'react-redux';
import { signOutAction } from '../../redux/actions/actionCreators/userActions';
import { filterImagesAction } from '../../redux/actions/actionCreators/filterActions';
import { onValue, ref } from 'firebase/database';
import { database } from '../../config/firebase';
import { getUsersOptions } from '../../helpers/selectOptions';

// Mocked users for select
const OPTIONS = [
	{ value: 'all', label: 'all' },
	{ value: '6QkuyVeAACTtR72iC83z4NMzCIy1', label: 'i.scherba32@gmail.com' },
	{ value: '6QkefVeAACTtR7weiC83z4NwezCIy1', label: 'test@test.tt' },
];

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [activeUser, setActiveUser] = useState('all');
	const dispatch = useDispatch();

	const handleClickButton = () => {
		dispatch(signOutAction());
	};

	const handleChangeSelect = (newValue: SingleValue<string | OptionParams>) => {
		setActiveUser((newValue as OptionParams).value);
		dispatch(filterImagesAction((newValue as OptionParams).value));
	};

	const selectOptions = getUsersOptions();

	return (
		<header className={cn(className, styles.header)} {...props}>
			<div>
				<Link to='/'>
					<Htag tag='h3'>Mini-paint</Htag>
				</Link>
			</div>
			<div className={styles.header__actions}>
				<CustomSelect options={selectOptions} onChange={handleChangeSelect} />
				<Button appearance='primary' onClick={handleClickButton}>
					SignOut
				</Button>
			</div>
		</header>
	);
};
