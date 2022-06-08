import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import close from './close.svg';
import menu from './burgerMenu.svg';

export const icons = {
	close,
	menu,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	icon: IconName;
}
