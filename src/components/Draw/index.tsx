import { MouseEvent, useContext, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Menu from '../DrawMenu';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { toast, ToastContainer } from 'react-toastify';
import { ref as refDB, set } from 'firebase/database';
import { database } from '../../config/firebase';
import moment from 'moment';
import { AuthContext } from '../../context/auth.context';

const Draw = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

	const [isDrawing, setIsDrawing] = useState(false);
	const [lineWidth, setLineWidth] = useState(20);
	const [lineColor, setLineColor] = useState('black');
	const [lineOpacity, setLineOpacity] = useState(0.1);

	const imageId = uuidv4();

	const { uid } = useContext(AuthContext);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext('2d');

		if (ctx) {
			ctx.lineCap = 'round';
			ctx.lineJoin = 'round';
			ctx.globalAlpha = lineOpacity;
			ctx.strokeStyle = lineColor;
			ctx.lineWidth = lineWidth;
			ctxRef.current = ctx;
		}
	}, [lineColor, lineOpacity, lineWidth]);

	const startDrawing = (e: MouseEvent<HTMLCanvasElement>) => {
		ctxRef.current?.beginPath();
		ctxRef.current?.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
		setIsDrawing(true);
	};

	// Function for ending the drawing
	const endDrawing = () => {
		ctxRef.current?.closePath();
		setIsDrawing(false);
	};

	const draw = (e: MouseEvent<HTMLCanvasElement>) => {
		if (!isDrawing) {
			return;
		}
		ctxRef.current?.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

		ctxRef.current?.stroke();
	};

	const saveImage = async () => {
		const storage = getStorage();
		const storageRef = ref(storage, `images/${imageId}.webp`);

		canvasRef.current?.toBlob((blob: Blob | null) => {
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
		<div className={styles.draw}>
			<div className={styles.draw__area}>
				<Menu
					setLineColor={setLineColor}
					setLineWidth={setLineWidth}
					setLineOpacity={setLineOpacity}
					handleSaveButton={saveImage}
				/>
				<canvas
					onMouseDown={(e) => startDrawing(e)}
					onMouseUp={endDrawing}
					onMouseMove={(e) => draw(e)}
					ref={canvasRef}
					width={`1280px`}
					height={`720px`}
				/>
			</div>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				// theme={theme === 'light' ? 'light' : 'dark'}
			/>
		</div>
	);
};

export default Draw;
