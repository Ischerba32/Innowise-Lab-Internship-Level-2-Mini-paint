import { HeaderProps } from './props';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Button, Htag } from '../UI';
import CustomSelect from '../Select';
import { SingleValue } from 'react-select';
import { OptionParams } from '../Select/props';
import { useDispatch } from 'react-redux';
import { signOutAction } from '../../redux/actions/actionCreators/userActions';
import { filterImagesAction } from '../../redux/actions/actionCreators/filterActions';
import { getUsersOptions } from '../../helpers/selectOptions';
import { useTheme } from '../../hooks/useTheme';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	// const [activeUser, setActiveUser] = useState('all');
	const dispatch = useDispatch();
	const { theme, dispatchTheme } = useTheme();

	const handleSignOut = () => {
		dispatch(signOutAction());
	};

	const handleChangeSelect = (newValue: SingleValue<string | OptionParams>) => {
		dispatch(filterImagesAction((newValue as OptionParams).value));
	};

	const selectOptions = getUsersOptions();

	const handleChangeTheme = () => {
		theme === 'light' ? dispatchTheme('dark') : dispatchTheme('light');
	};

	return (
		<header className={cn(className, styles.header)} {...props}>
			<div>
				<Link to='/'>
					<Htag tag='h3'>Mini-paint</Htag>
				</Link>
			</div>
			<div className={styles.header__actions}>
				<CustomSelect options={selectOptions} onChange={handleChangeSelect} />
				<Button appearance='primary' onClick={handleChangeTheme}>
					{theme}
				</Button>
				<Button appearance='primary' onClick={handleSignOut}>
					SignOut
				</Button>
			</div>
		</header>
	);
};
