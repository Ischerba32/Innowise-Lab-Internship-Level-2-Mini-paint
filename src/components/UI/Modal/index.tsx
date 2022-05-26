import IModalProps from './props';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Card } from '..';

export const Modal = ({
	active,
	setActive,
	children,
	className,
	...props
}: IModalProps) => {
	return (
		<div
			className={cn(styles.modal, className, {
				[styles.modal_active]: active,
			})}
			onClick={() => setActive(false)}
			{...props}
		>
			<Card
				color='blue'
				className={cn(styles.modal__content, {
					[styles.modal__content_active]: active,
				})}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={styles.modal__content_close}>
					<span onClick={() => setActive(false)}>&times;</span>
				</div>
				{children}
			</Card>
		</div>
	);
};
