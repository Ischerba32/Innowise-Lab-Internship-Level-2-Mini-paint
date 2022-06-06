import * as UserActionCreators from './actionCreators/userActions';
import * as ImagesActionCreators from './actionCreators/imagesActions';
import * as CanvasActionCreators from './actionCreators/canvasActions';

export default {
	...UserActionCreators,
	...ImagesActionCreators,
	...CanvasActionCreators,
};
