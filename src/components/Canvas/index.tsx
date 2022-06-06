import { memo, useEffect } from 'react';
import CanvasMenu from '../CanvasMenu';
import { v4 as uuidv4 } from 'uuid';
import { toast, ToastContainer } from 'react-toastify';
import styles from './styles.module.scss';
import { useDraw } from '../../hooks/useDraw';
import { useTheme } from '../../hooks/useTheme';
import { useDispatch, useSelector } from 'react-redux';
import State from '../../interfaces/state.interface';
// import { useNavigate } from 'react-router-dom';
import { saveImageAction } from '../../redux/actions/actionCreators/imagesActions';
import { resetCanvasAction } from '../../redux/actions/actionCreators/canvasActions';

const Canvas = () => {
	const imageId = uuidv4();

	const { uid } = useSelector((state: State) => state.user);
	const { tool, lineColor, lineWidth, lineOpacity } = useSelector(
		(state: State) => state.canvas
	);
	const dispatch = useDispatch();
	// const navigate = useNavigate();

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

	useEffect(() => {
		const handleResetCanvas = () => {
			dispatch(resetCanvasAction());
		};
		return () => handleResetCanvas();
	}, [dispatch]);

	const saveImage = async () => {
		subCanvasRef.current?.toBlob(async (blob: Blob | null) => {
			if (blob) {
				dispatch(saveImageAction({ blob, imageId, uid }));
				toast.success('Image saved successfully');
				// navigate('/');
			}
		}, 'image/webp');
	};

	return (
		<div className={styles.canvas}>
			<CanvasMenu
				lineWidth={lineWidth}
				lineOpacity={lineOpacity}
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
