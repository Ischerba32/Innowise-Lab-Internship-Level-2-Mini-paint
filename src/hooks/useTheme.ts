import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UseThemeResult from '../interfaces/hooks/useTheme.interface';
import State from '../interfaces/state.interface';
import { setThemeAction } from '../redux/actions/actionCreators/themeActions';

// const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
// const defaultTheme = isDarkTheme ? 'dark' : 'light';

export const useTheme = (): UseThemeResult => {
	// const [theme, setTheme] = useState(
	// 	defaultTheme || localStorage.getItem('app-theme')
	// );

	const { theme } = useSelector((state: State) => state.theme);
	const dispatch = useDispatch();

	const dispatchTheme = (theme: string) => {
		return dispatch(setThemeAction(theme));
	};

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('app-theme', theme);
	}, [theme]);

	return { theme, dispatchTheme };
};
