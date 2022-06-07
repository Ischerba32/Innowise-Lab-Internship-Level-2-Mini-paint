import { useDispatch } from 'react-redux';
import { SingleValue } from 'react-select';
import { getToolsSelectOptions } from '../../helpers/selectOptions';
import { Tools } from '../../interfaces/hooks/useDraw.interface';
import { OptionParams } from '../UI/CustomSelect/props';
import { Button, CustomSelect } from '../UI';
import CanvasMenuProps from './props';
import styles from './styles.module.scss';
import {
	setLineColor,
	setLineOpacity,
	setLineWidth,
	setTool,
} from '../../redux/slices/canvasSlice';

const CanvasMenu = ({
	lineWidth,
	lineOpacity,
	handleSaveButton,
	handleClearButton,
}: CanvasMenuProps) => {
	const dispatch = useDispatch();

	const selectOptions = getToolsSelectOptions(Tools);

	const handleChangeSelect = (newValue: SingleValue<string | OptionParams>) => {
		dispatch(setTool((newValue as OptionParams).value as Tools));
	};

	return (
		<div className={styles.menu}>
			<div className={styles.menu__tools}>
				<CustomSelect options={selectOptions} onChange={handleChangeSelect} />
			</div>
			<div className={styles.menu__color}>
				<label>Color</label>
				<input
					type='color'
					onChange={(e) => {
						dispatch(setLineColor(e.target.value));
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
						dispatch(setLineWidth(+e.target.value));
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
						dispatch(setLineOpacity(+e.target.value / 100));
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
