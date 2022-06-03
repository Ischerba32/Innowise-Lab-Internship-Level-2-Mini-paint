import CanvasState, { CanvasAction } from '../../interfaces/canvas.interface';
import { Tools } from '../../interfaces/hooks/useDraw.interface';
import { ActionTypes } from '../actions/actionTypes';

const initialState: CanvasState = {
	tool: Tools.PEN,
	lineWidth: 10,
	lineColor: 'black',
	lineOpacity: 0.5,
};

export const canvasReducer = (
	state = initialState,
	{ type, payload }: CanvasAction
): CanvasState => {
	switch (type) {
		case ActionTypes.SET_TOOL:
			return { ...state, tool: payload };
		case ActionTypes.SET_LINE_COLOR:
			return { ...state, lineColor: payload };
		case ActionTypes.SET_LINE_WIDTH:
			return { ...state, lineWidth: payload };
		case ActionTypes.SET_LINE_OPACITY: {
			return { ...state, lineOpacity: payload };
		}
		default:
			return state;
	}
};
