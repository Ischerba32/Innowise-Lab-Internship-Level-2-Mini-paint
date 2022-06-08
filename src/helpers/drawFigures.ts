import { MouseEvent } from 'react';

export const drawPen = (
	context: CanvasRenderingContext2D,
	event: MouseEvent<HTMLCanvasElement>
) => {
	context.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
	context.stroke();
};

export const drawRectangle = (
	context: CanvasRenderingContext2D,
	mouseDownX: number,
	mouseDownY: number,
	width: number,
	height: number
) => {
	context.strokeRect(mouseDownX, mouseDownY, width, height);
	context.stroke();
};

export const drawCircle = (
	context: CanvasRenderingContext2D,
	event: MouseEvent<HTMLCanvasElement>,
	mouseDownX: number,
	mouseDownY: number
) => {
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
};

export const drawLine = (
	context: CanvasRenderingContext2D,
	event: MouseEvent<HTMLCanvasElement>,
	mouseDownX: number,
	mouseDownY: number
) => {
	context.beginPath();
	context.moveTo(mouseDownX, mouseDownY);
	context.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
	context.stroke();
};

export const drawStar = (
	context: CanvasRenderingContext2D,
	event: MouseEvent<HTMLCanvasElement>,
	mouseDownX: number,
	mouseDownY: number
) => {
	context.save();
	context.beginPath();
	context.translate(mouseDownX, mouseDownY);
	context.moveTo(
		0,
		0 -
			Math.sqrt(
				(event.nativeEvent.offsetX - mouseDownX) ** 2 +
					(event.nativeEvent.offsetY - mouseDownY) ** 2
			)
	);
	for (let i = 0; i < 5; i++) {
		context.rotate(Math.PI / 5);
		context.lineTo(
			0,
			0 -
				Math.sqrt(
					(event.nativeEvent.offsetX - mouseDownX) ** 2 +
						(event.nativeEvent.offsetY - mouseDownY) ** 2
				) *
					2
			// inset
		);
		context.rotate(Math.PI / 5);
		context.lineTo(
			0,
			0 -
				Math.sqrt(
					(event.nativeEvent.offsetX - mouseDownX) ** 2 +
						(event.nativeEvent.offsetY - mouseDownY) ** 2
				)
		);
	}
	context.closePath();
	context.stroke();
	context.restore();
};
