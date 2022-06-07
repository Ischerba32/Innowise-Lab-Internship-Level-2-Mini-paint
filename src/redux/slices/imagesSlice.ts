import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Image, {
	ImageState,
	SaveImageParams,
} from '../../interfaces/image.interface';

export const imagesSlice = createSlice({
	name: 'images',
	initialState: {
		isLoading: false,
		images: [],
	},
	reducers: {
		getImages: (state: ImageState) => {
			state.isLoading = true;
		},

		getImagesSuccess: (state: ImageState) => {
			state.isLoading = false;
		},

		setImages: (state: ImageState, action: PayloadAction<Image[]>) => {
			state.images = action.payload;
		},

		saveImage: (state: ImageState, action: PayloadAction<SaveImageParams>) => {
			state.isLoading = true;
		},

		saveImageSuccess: (state: ImageState) => {
			state.isLoading = false;
		},
	},
});

export const {
	getImages,
	getImagesSuccess,
	saveImage,
	saveImageSuccess,
	setImages,
} = imagesSlice.actions;

export default imagesSlice.reducer;
