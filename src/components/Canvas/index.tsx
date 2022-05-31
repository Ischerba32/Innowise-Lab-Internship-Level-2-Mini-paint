import { memo, useContext, useState } from 'react';
import CanvasMenu from '../CanvasMenu';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { toast, ToastContainer } from 'react-toastify';
import { ref as refDB, set } from 'firebase/database';
import { database } from '../../config/firebase';
import moment from 'moment';
import { AuthContext } from '../../context/auth.context';
import styles from './styles.module.scss';
import { useDraw } from '../../hooks/useDraw';
import { useTheme } from '../../hooks/useTheme';
import { Tools } from '../../interfaces/hooks/useDraw.interface';

const Canvas = () => {
	const [tool, setTool] = useState(Tools.PEN);
	const [lineColor, setLineColor] = useState('black');
	const [lineWidth, setLineWidth] = useState(10);
	const [lineOpacity, setLineOpacity] = useState(0.5);

	const imageId = uuidv4();

	const { uid } = useContext(AuthContext);

	const { theme } = useTheme();
	const {
		wrapperRef,
		canvasRef,
		canvasWidth,
		canvasHeight,
		subCanvasRef,
		clearCanvas,
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
	} = useDraw({ tool, lineColor, lineWidth, lineOpacity });

	const saveImage = async () => {
		const storage = getStorage();
		const storageRef = ref(storage, `images/${imageId}.webp`);

		subCanvasRef.current?.toBlob((blob: Blob | null) => {
			blob &&
				uploadBytes(storageRef, blob)
					.then((snapshot) => {
						getDownloadURL(snapshot.ref).then((url) => {
							saveImageToDB(url);
						});
						toast.success('Image saved successfully');
					})
					.catch((error) => {
						toast.error((error as Error).message);
					});
		}, 'image/webp');
	};

	const saveImageToDB = async (url: string) => {
		const newImageRef = refDB(database, `images/${imageId}`);
		await set(newImageRef, {
			imageId,
			userId: uid,
			image: url,
			date: moment().format('YYYY-MM-DD'),
		});
	};

	return (
		<div className={styles.canvas}>
			<CanvasMenu
				lineWidth={lineWidth}
				lineOpacity={lineOpacity}
				setTool={setTool}
				setLineColor={setLineColor}
				setLineWidth={setLineWidth}
				setLineOpacity={setLineOpacity}
				handleSaveButton={saveImage}
				handleClearButton={clearCanvas}
			/>
			<div ref={wrapperRef} className={styles.canvas__wrapper}>
				<canvas ref={subCanvasRef} width={canvasWidth} height={canvasHeight} />
				<canvas
					ref={canvasRef}
					width={canvasWidth}
					height={canvasHeight}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
				/>
			</div>
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme={theme === 'light' ? 'light' : 'dark'}
			/>
		</div>
	);
};

export default memo(Canvas);
