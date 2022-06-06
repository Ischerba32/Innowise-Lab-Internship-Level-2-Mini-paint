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
	action: CanvasAction
): CanvasState => {
	switch (action.type) {
		case ActionTypes.SET_TOOL:
			return { ...state, tool: action.payload };
		case ActionTypes.SET_LINE_COLOR:
			return { ...state, lineColor: action.payload };
		case ActionTypes.SET_LINE_WIDTH:
			return { ...state, lineWidth: action.payload };
		case ActionTypes.SET_LINE_OPACITY: {
			return { ...state, lineOpacity: action.payload };
		}
		case ActionTypes.RESET_CANVAS:
			return {
				...state,
				tool: Tools.PEN,
				lineWidth: 10,
				lineColor: 'black',
				lineOpacity: 0.5,
			};
		default:
			return state;
	}
};
