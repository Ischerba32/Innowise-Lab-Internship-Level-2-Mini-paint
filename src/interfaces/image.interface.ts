export default interface Image {
	date: string;
	image: string;
	userId: string;
	imageId: string;
}
export interface ImageState {
	isLoading: boolean;
	images: Image[];
}

export interface SaveImageParams {
	blob: Blob;
	imageId: string;
	uid: string;
}
