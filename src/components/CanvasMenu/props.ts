import { Dispatch, SetStateAction } from 'react';
import { Tools } from '../../interfaces/hooks/useDraw.interface';

export default interface CanvasMenuProps {
	lineWidth: number;
	lineOpacity: number;
	setTool: Dispatch<SetStateAction<Tools>>;
	setLineColor: Dispatch<SetStateAction<string>>;
	setLineWidth: Dispatch<SetStateAction<number>>;
	setLineOpacity: Dispatch<SetStateAction<number>>;
	handleSaveButton?: () => Promise<void>;
	handleClearButton?: () => void;
}
