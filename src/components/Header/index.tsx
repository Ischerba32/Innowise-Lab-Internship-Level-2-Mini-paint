import { HeaderProps } from './props';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Button, Htag, CustomSelect, ThemeSwitch, Card } from '../UI';
import { SingleValue } from 'react-select';
import { OptionParams } from '../UI/CustomSelect/props';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersOptions } from '../../helpers/selectOptions';
import { filterImages } from '../../redux/slices/filterSlice';
import { signOut } from '../../redux/slices/userSlice';
import { ButtonIcon } from '../UI/ButtonIcon';
import { setIsOpened } from '../../redux/slices/menuSlice';
import State from '../../interfaces/state.interface';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const { isOpened } = useSelector((state: State) => state.burgerMenu);
	const dispatch = useDispatch();

	const handleSignOut = () => {
		isOpened && dispatch(setIsOpened(false));
		dispatch(signOut());
	};

	const handleChangeSelect = (newValue: SingleValue<string | OptionParams>) => {
		dispatch(filterImages((newValue as OptionParams).value));
	};

	const handleMenuOpen = () => {
		dispatch(setIsOpened(true));
	};

	const handleMenuClose = () => {
		dispatch(setIsOpened(false));
	};

	const selectOptions = getUsersOptions();

	return (
		<header className={cn(className, styles.header)} {...props}>
			<div>
				<Htag tag='h3'>Mini-paint</Htag>
			</div>
			<div className={styles.header__actions}>
				<CustomSelect options={selectOptions} onChange={handleChangeSelect} />
				<ThemeSwitch />
				<Button appearance='primary' onClick={handleSignOut}>
					SignOut
				</Button>
			</div>
			<ButtonIcon
				className={styles.header__burgerButton}
				icon='menu'
				onClick={handleMenuOpen}
			/>
			<Card
				className={cn(styles.header__menu, {
					[styles.header__menu_opened]: isOpened,
					[styles.header__menu_closed]: !isOpened,
				})}
			>
				<div className={styles.header__menu_content}>
					<CustomSelect options={selectOptions} onChange={handleChangeSelect} />
					<ThemeSwitch />
					<Button appearance='primary' onClick={handleSignOut}>
						SignOut
					</Button>
				</div>
				<ButtonIcon
					className={styles.header__menu_closeButton}
					icon='close'
					onClick={handleMenuClose}
				/>
			</Card>
		</header>
	);
};
