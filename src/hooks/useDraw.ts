import {
	useRef,
	useState,
	useEffect,
	MouseEvent,
	MutableRefObject,
} from 'react';
import {
	UseDrawParams,
	UseDrawReturnParams,
	Tools,
} from '../interfaces/hooks/useDraw.interface';

export const useDraw = ({
	tool,
	lineColor,
	lineWidth,
	lineOpacity,
}: UseDrawParams): UseDrawReturnParams => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const subCanvasRef = useRef<HTMLCanvasElement | null>(null);
	const wrapperRef = useRef<HTMLDivElement | null>(null);

	const [canvasWidth, setCanvasWidth] = useState(0);
	const [canvasHeight, setCanvasHeight] = useState(0);
	const [mouseDownX, setMouseDownX] = useState(0);
	const [mouseDownY, setMouseDownY] = useState(0);
	const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
	const [subContext, setSubContext] = useState<CanvasRenderingContext2D | null>(
		null
	);

	useEffect(() => {
		if (
			canvasRef.current &&
			subCanvasRef.current &&
			wrapperRef.current?.clientWidth
		) {
			setCanvasWidth(wrapperRef.current.offsetWidth);
			setCanvasHeight(wrapperRef.current.offsetHeight);
			setContext(canvasRef.current.getContext('2d'));
			setSubContext(subCanvasRef.current.getContext('2d'));
		}
	}, []);

	useEffect(() => {
		if (
			canvasRef.current &&
			subCanvasRef.current &&
			wrapperRef.current?.clientWidth
		) {
			canvasRef.current.width = subCanvasRef.current.width;
			canvasRef.current.height = subCanvasRef.current.height;
			subCanvasRef.current.width = canvasWidth;
			subCanvasRef.current.height = canvasHeight;
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
		setMouseDownX(event.nativeEvent.offsetX - target.offsetLeft);
		setMouseDownY(event.nativeEvent.offsetY - target.offsetTop);
	};

	const handleMouseMove = (event: MouseEvent<HTMLCanvasElement>) => {
		if (
			context &&
			mouseDownX &&
			mouseDownY &&
			wrapperRef.current &&
			canvasRef.current
		) {
			context.strokeStyle = lineColor;
			context.lineWidth = lineWidth;
			context.lineCap = 'round';
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
					context.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
					context.stroke();
					break;
				case Tools.RECTANGLE:
					context.strokeRect(mouseDownX, mouseDownY, width, height);
					context.stroke();
					break;
				case Tools.CIRCLE:
					context.beginPath();
					context.arc(
						mouseDownX,
						mouseDownY,
						Math.sqrt(
							(event.nativeEvent.offsetX - mouseDownX) ** 2 +
								(event.nativeEvent.offsetY - mouseDownY) ** 2
						),
						0,
						Math.PI * 2,
						false
					);
					context.stroke();
					break;
				case Tools.LINE:
					context.beginPath();
					context.moveTo(mouseDownX, mouseDownY);
					context.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
					context.stroke();
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
			setMouseDownX(0);
			setMouseDownY(0);
		}
	};

	return {
		wrapperRef,
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
