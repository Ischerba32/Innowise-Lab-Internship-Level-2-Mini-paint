import { ImageState } from './image.interface';
import UserState from './user.interface';
import CanvasState from './canvas.interface';
import FilterState from './filter.interface';
import ThemeState from './theme.interface';
import MenuState from './menu.interface';

export default interface State {
	user: UserState;
	images: ImageState;
	filter: FilterState;
	canvas: CanvasState;
	theme: ThemeState;
	burgerMenu: MenuState;
}
