import styles from './styles.module.scss';
import { ButtonIconProps, icons } from './props';
import cn from 'classnames';

export const ButtonIcon = ({
	icon,
	className,
	...props
}: ButtonIconProps): JSX.Element => {
	return (
		<button className={cn(styles.button, className)} {...props}>
			<img src={icons[icon]} />
		</button>
	);
};
