import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Menu from '../DrawMenu';

const Draw = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

	const [isDrawing, setIsDrawing] = useState(false);
	const [lineWidth, setLineWidth] = useState(5);
	const [lineColor, setLineColor] = useState('black');
	const [lineOpacity, setLineOpacity] = useState(0.1);

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

	// Function for starting the drawing
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

	return (
		<div className={styles.draw}>
			<h1>Paint App</h1>
			<div className={styles.draw__area}>
				<Menu
					setLineColor={setLineColor}
					setLineWidth={setLineWidth}
					setLineOpacity={setLineOpacity}
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
		</div>
	);
};

export default Draw;
