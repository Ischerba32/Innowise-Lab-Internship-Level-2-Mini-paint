import { ImageState } from './image.interface';
import User from './user.interface';
import CanvasState from './canvas.interface';
import FilterState from './filter.interface';
import ThemeState from './theme.interface';

export default interface State {
	user: User;
	images: ImageState;
	filter: FilterState;
	canvas: CanvasState;
	theme: ThemeState;
}
