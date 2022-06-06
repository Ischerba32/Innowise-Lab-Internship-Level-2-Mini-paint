import { ImageState } from '../redux/reducers/imagesReducer';
import User from './user.interface';
import CanvasState from './canvas.interface';
import FilterState from './filter.interface';

export default interface State {
	user: User;
	images: ImageState;
	filter: FilterState;
	canvas: CanvasState;
}
