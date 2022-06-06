import { ActionTypes } from '../redux/actions/actionTypes';
import { Tools } from './hooks/useDraw.interface';

export default interface CanvasState {
	tool: Tools;
	lineColor: string;
	lineWidth: number;
	lineOpacity: number;
}

interface SetToolAction {
	type: ActionTypes.SET_TOOL;
	payload: Tools;
}

interface SetLineColorAction {
	type: ActionTypes.SET_LINE_COLOR;
	payload: string;
}

interface SetLineWidthAction {
	type: ActionTypes.SET_LINE_WIDTH;
	payload: number;
}

interface SetLineOpacityAction {
	type: ActionTypes.SET_LINE_OPACITY;
	payload: number;
}

interface ResetCanvasAction {
	type: ActionTypes.RESET_CANVAS;
}

export type CanvasAction =
	| SetToolAction
	| SetLineColorAction
	| SetLineWidthAction
	| SetLineOpacityAction
	| ResetCanvasAction;
