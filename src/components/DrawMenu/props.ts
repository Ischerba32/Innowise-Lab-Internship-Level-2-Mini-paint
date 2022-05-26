import { Dispatch, SetStateAction } from 'react';

export default interface MenuProps {
	setLineColor: Dispatch<SetStateAction<string>>;
	setLineWidth: Dispatch<SetStateAction<number>>;
	setLineOpacity: Dispatch<SetStateAction<number>>;
	handleSaveButton: () => Promise<void>;
}
