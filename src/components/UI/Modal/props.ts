import {
	DetailedHTMLProps,
	Dispatch,
	HTMLAttributes,
	ReactNode,
	SetStateAction,
} from 'react';

export default interface IModalProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	active: boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
	children?: ReactNode;
}
