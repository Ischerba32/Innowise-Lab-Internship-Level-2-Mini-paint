import { useDispatch } from 'react-redux';
import { SingleValue } from 'react-select';
import { Tools } from '../../interfaces/hooks/useDraw.interface';
import {
	setLineColorAction,
	setLineOpacityAction,
	setLineWidthAction,
	setToolAction,
} from '../../redux/actions/actionCreators/canvasActions';
import CustomSelect from '../Select';
import { OptionParams } from '../Select/props';
import { Button } from '../UI';
import CanvasMenuProps from './props';
import styles from './styles.module.scss';

const CanvasMenu = ({
	lineWidth,
	lineOpacity,
	handleSaveButton,
	handleClearButton,
}: CanvasMenuProps) => {
	const dispatch = useDispatch();

	const getSelectOptions = (tools: object) => {
		const result: OptionParams[] = [];
		Object.keys(tools).forEach((tool) => {
			result.push({ value: tool, label: tool });
		});
		return result;
	};

	const selectOptions = getSelectOptions(Tools);
	console.log(selectOptions);

	const handleChangeSelect = (newValue: SingleValue<string | OptionParams>) => {
		dispatch(setToolAction((newValue as OptionParams).value as Tools));
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
						dispatch(setLineColorAction(e.target.value));
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
						dispatch(setLineWidthAction(+e.target.value));
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
						dispatch(setLineOpacityAction(+e.target.value / 100));
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
