import { SetThemeAction } from '../../interfaces/theme.interface';
export default interface UseThemeResult {
	theme: string;
	dispatchTheme: (theme: string) => SetThemeAction;
}
