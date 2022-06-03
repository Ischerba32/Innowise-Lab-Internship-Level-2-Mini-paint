import { ImageState } from '../redux/reducers/imagesReducer';
import User from './user.interface';
import CanvasState from './canvas.interface';

export default interface State {
	user: User;
	images: ImageState;
	canvas: CanvasState;
}
