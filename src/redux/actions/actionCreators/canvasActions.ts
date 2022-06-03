import { CanvasAction } from '../../../interfaces/canvas.interface';
import { Tools } from '../../../interfaces/hooks/useDraw.interface';
import { ActionTypes } from '../actionTypes';

export const setLineColorAction = (payload: string): CanvasAction => {
	return { type: ActionTypes.SET_LINE_COLOR, payload };
};

export const setLineWidthAction = (payload: number): CanvasAction => {
	return { type: ActionTypes.SET_LINE_WIDTH, payload };
};

export const setLineOpacityAction = (payload: number): CanvasAction => {
	return { type: ActionTypes.SET_LINE_OPACITY, payload };
};

export const setToolAction = (payload: Tools): CanvasAction => {
	return { type: ActionTypes.SET_TOOL, payload };
};
