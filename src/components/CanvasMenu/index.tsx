import { SingleValue } from 'react-select';
import { Tools } from '../../interfaces/hooks/useDraw.interface';
import CustomSelect from '../Select';
import { OptionParams } from '../Select/props';
import { Button } from '../UI';
import CanvasMenuProps from './props';
import styles from './styles.module.scss';

// Mocked tools for select
const OPTIONS = [
	{ value: Tools.PEN, label: 'Pen' },
	{ value: Tools.CIRCLE, label: 'Circle' },
	{ value: Tools.RECTANGLE, label: 'Rectangle' },
	{ value: Tools.LINE, label: 'Line' },
];

const CanvasMenu = ({
	lineWidth,
	lineOpacity,
	setTool,
	setLineColor,
	setLineWidth,
	setLineOpacity,
	handleSaveButton,
	handleClearButton,
}: CanvasMenuProps) => {
	const handleChangeSelect = (newValue: SingleValue<string | OptionParams>) => {
		setTool((newValue as OptionParams).value as Tools);
	};

	return (
		<div className={styles.menu}>
			<div className={styles.menu__tools}>
				<CustomSelect options={OPTIONS} onChange={handleChangeSelect} />
			</div>
			<div className={styles.menu__color}>
				<label>Color</label>
				<input
					type='color'
					onChange={(e) => {
						setLineColor(e.target.value);
					}}
				/>
			</div>
			<div className={styles.menu__width}>
				<label>Brush Width </label>
				<input
					type='range'
					min='1'
					max='100'
					value={lineWidth}
					onChange={(e) => {
						setLineWidth(+e.target.value);
					}}
				/>
			</div>
			<div className={styles.menu__opacity}>
				<label>Brush Opacity</label>
				<input
					type='range'
					min='0'
					max='100'
					value={lineOpacity * 100}
					onChange={(e) => {
						setLineOpacity(+e.target.value / 100);
					}}
				/>
			</div>
			<div className={styles.menu__actions}>
				<Button appearance='primary' onClick={handleSaveButton}>
					Save
				</Button>
				<Button appearance='ghost' onClick={handleClearButton}>
					Clear
				</Button>
			</div>
		</div>
	);
};

export default CanvasMenu;
