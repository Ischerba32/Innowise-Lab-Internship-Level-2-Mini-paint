import { Tools } from '../../interfaces/hooks/useDraw.interface';
import { Button } from '../UI';
import MenuProps from './props';
import styles from './styles.module.scss';

const CanvasMenu = ({
	setTool,
	setLineColor,
	setLineWidth,
	setLineOpacity,
	handleSaveButton,
	handleClearButton,
}: MenuProps) => {
	return (
		<div className={styles.menu}>
			<div className={styles.menu__tools}>
				<Button appearance='ghost' onClick={() => setTool(Tools.PEN)}>
					&#128396;
				</Button>
				<Button appearance='ghost' onClick={() => setTool(Tools.CIRCLE)}>
					&#9675;
				</Button>
				<Button appearance='ghost' onClick={() => setTool(Tools.RECTANGLE)}>
					&#9645;
				</Button>
				<Button appearance='ghost' onClick={() => setTool(Tools.LINE)}>
					&#9585;
				</Button>
			</div>
			<div className={styles.menu__color}>
				<label>Brush Color </label>
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
