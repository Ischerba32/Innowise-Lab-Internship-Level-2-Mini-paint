import {
	drawPen,
	drawRectangle,
	drawCircle,
	drawLine,
	drawStar,
} from '../helpers/drawFigures';
import { useRef, useEffect, MouseEvent, MutableRefObject } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	UseDrawParams,
	UseDrawReturnParams,
	Tools,
} from '../interfaces/hooks/useDraw.interface';
import State from '../interfaces/state.interface';
import {
	setCanvasHeight,
	setCanvasWidth,
	setContext,
	setMouseDownX,
	setMouseDownY,
	setSubContext,
} from '../redux/slices/canvasSlice';

export const useDraw = ({
	tool,
	lineColor,
	lineWidth,
	lineOpacity,
}: UseDrawParams): UseDrawReturnParams => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const subCanvasRef = useRef<HTMLCanvasElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const {
		canvasWidth,
		canvasHeight,
		mouseDownX,
		mouseDownY,
		context,
		subContext,
	} = useSelector((state: State) => state.canvas);
	const dispatch = useDispatch();

	useEffect(() => {
		if (
			canvasRef.current &&
			subCanvasRef.current &&
			containerRef.current?.clientWidth
		) {
			dispatch(setCanvasWidth(containerRef.current.offsetWidth));
			dispatch(setCanvasHeight(containerRef.current.offsetHeight));
			dispatch(setContext(canvasRef.current.getContext('2d')));
			dispatch(setSubContext(subCanvasRef.current.getContext('2d')));
		}
	}, [dispatch]);

	useEffect(() => {
		if (
			canvasRef.current &&
			subCanvasRef.current &&
			containerRef.current?.clientWidth
		) {
			subCanvasRef.current.width = canvasWidth;
			subCanvasRef.current.height = canvasHeight;
			canvasRef.current.width = subCanvasRef.current.width;
			canvasRef.current.height = subCanvasRef.current.height;
		}
	}, [canvasWidth, canvasHeight]);

	const clearContext = (
		context: CanvasRenderingContext2D,
		ref: MutableRefObject<HTMLCanvasElement>
	) => {
		context.clearRect(0, 0, ref.current.width, ref.current.height);
	};

	const clearCanvas = () => {
		if (context && subContext && canvasRef && subCanvasRef) {
			clearContext(context, canvasRef as MutableRefObject<HTMLCanvasElement>);
			clearContext(
				subContext,
				subCanvasRef as MutableRefObject<HTMLCanvasElement>
			);
		}
	};

	const handleMouseDown = (event: MouseEvent<HTMLCanvasElement>) => {
		const target = event.target as HTMLCanvasElement;
		dispatch(setMouseDownX(event.nativeEvent.offsetX - target.offsetLeft));
		dispatch(setMouseDownY(event.nativeEvent.offsetY - target.offsetTop));
	};

	const handleMouseMove = (event: MouseEvent<HTMLCanvasElement>) => {
		if (
			context &&
			mouseDownX &&
			mouseDownY &&
			containerRef.current &&
			canvasRef.current
		) {
			context.lineCap = 'round';
			context.strokeStyle = lineColor;
			context.lineWidth = lineWidth;
			context.shadowColor = lineColor;
			context.globalAlpha = lineOpacity;

			const width = event.nativeEvent.offsetX - mouseDownX;
			const height = event.nativeEvent.offsetY - mouseDownY;

			context.clearRect(
				0,
				0,
				canvasRef.current.width,
				canvasRef.current.height
			);

			switch (tool) {
				case Tools.PEN:
					drawPen(context, event);
					break;
				case Tools.RECTANGLE:
					drawRectangle(context, mouseDownX, mouseDownY, width, height);
					break;
				case Tools.CIRCLE:
					drawCircle(context, event, mouseDownX, mouseDownY);
					break;
				case Tools.LINE:
					drawLine(context, event, mouseDownX, mouseDownY);
					break;
				case Tools.STAR:
					drawStar(context, event, mouseDownX, mouseDownY);
					break;
				default:
					break;
			}
		}
	};

	const handleMouseUp = () => {
		if (context && subContext && canvasRef.current) {
			subContext.drawImage(canvasRef.current, 0, 0);
			context.beginPath();
			dispatch(setMouseDownX(0));
			dispatch(setMouseDownY(0));
		}
	};

	return {
		containerRef,
		canvasRef,
		canvasWidth,
		canvasHeight,
		subCanvasRef,
		clearCanvas,
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
	};
};
