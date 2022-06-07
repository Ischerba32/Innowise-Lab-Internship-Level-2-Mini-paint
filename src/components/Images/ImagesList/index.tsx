import { onValue, ref } from 'firebase/database';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { database } from '../../../config/firebase';
import Image from '../../../interfaces/image.interface';
import State from '../../../interfaces/state.interface';
import { selectImagesByFilter } from '../../../redux/selectors';
import {
	getImages,
	getImagesSuccess,
	setImages,
} from '../../../redux/slices/imagesSlice';
import { Button, Loader } from '../../UI';
import ImageItem from '../ImageItem';
import styles from './styles.module.scss';

const ImagesList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { uid } = useSelector((state: State) => state.user);
	const { isLoading } = useSelector((state: State) => state.images);
	const images = useSelector(selectImagesByFilter);

	useEffect(() => {
		const fetchData = async () => {
			dispatch(getImages());
			console.log('fetching images');
			if (uid) {
				await onValue(ref(database, `images`), (snapshot) => {
					if (snapshot.val()) {
						console.log('fetched images');
						dispatch(setImages(Object.values(snapshot.val())));
					}
					dispatch(getImagesSuccess());
				});
			}
		};
		fetchData();
	}, [uid, dispatch]);

	// if (isLoading) {
	// 	return <Loader speed={2} />;
	// }

	return (
		<div className={styles.images}>
			{isLoading && <Loader speed={2} />}
			<div className={styles.images__container}>
				{images &&
					images.map((image: Image) => (
						<ImageItem image={image} key={image.imageId} />
					))}
			</div>
			<div className={styles.images__create}>
				<Button appearance='primary' onClick={() => navigate('/draw')}>
					+ Create
				</Button>
			</div>
		</div>
	);
};

export default memo(ImagesList);
