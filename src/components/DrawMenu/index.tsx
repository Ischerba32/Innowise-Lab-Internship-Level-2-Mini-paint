import { Button } from '../UI';
import MenuProps from './props';
import styles from './styles.module.scss';

const Menu = ({
	setLineColor,
	setLineWidth,
	setLineOpacity,
	handleSaveButton,
}: MenuProps) => {
	return (
		<div className={styles.menu}>
			<label>Brush Color </label>
			<input
				type='color'
				onChange={(e) => {
					setLineColor(e.target.value);
				}}
			/>
			<label>Brush Width </label>
			<input
				type='range'
				min='1'
				max='100'
				onChange={(e) => {
					setLineWidth(+e.target.value);
				}}
			/>
			<label>Brush Opacity</label>
			<input
				type='range'
				min='0'
				max='100'
				onChange={(e) => {
					setLineOpacity(+e.target.value / 100);
				}}
			/>
			<Button appearance='primary' onClick={handleSaveButton}>
				Save
			</Button>
		</div>
	);
};

export default Menu;
