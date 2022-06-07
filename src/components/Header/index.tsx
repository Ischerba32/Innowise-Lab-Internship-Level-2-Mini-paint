import { HeaderProps } from './props';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Button, Htag, CustomSelect, ThemeSwitch } from '../UI';
import { SingleValue } from 'react-select';
import { OptionParams } from '../UI/CustomSelect/props';
import { useDispatch } from 'react-redux';
import { getUsersOptions } from '../../helpers/selectOptions';
import { filterImages } from '../../redux/slices/filterSlice';
import { signOut } from '../../redux/slices/userSlice';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const dispatch = useDispatch();

	const handleSignOut = () => {
		dispatch(signOut());
	};

	const handleChangeSelect = (newValue: SingleValue<string | OptionParams>) => {
		dispatch(filterImages((newValue as OptionParams).value));
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
				<ThemeSwitch />
				<Button appearance='primary' onClick={handleSignOut}>
					SignOut
				</Button>
			</div>
		</header>
	);
};
