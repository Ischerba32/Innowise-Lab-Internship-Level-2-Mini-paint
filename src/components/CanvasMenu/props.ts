import { Dispatch, SetStateAction } from 'react';
import { Tools } from '../../interfaces/hooks/useDraw.interface';

export default interface CanvasMenuProps {
	lineWidth: number;
	lineOpacity: number;
	handleSaveButton?: () => Promise<void>;
	handleClearButton?: () => void;
}
