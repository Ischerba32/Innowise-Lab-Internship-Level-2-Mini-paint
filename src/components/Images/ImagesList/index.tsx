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
import { setIsOpened } from '../../../redux/slices/menuSlice';
import { Button, Htag, Loader } from '../../UI';
import ImageItem from '../ImageItem';
import styles from './styles.module.scss';

const ImagesList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { uid } = useSelector((state: State) => state.user);
	const { isLoading } = useSelector((state: State) => state.images);
	const images = useSelector(selectImagesByFilter);
	const { isOpened } = useSelector((state: State) => state.burgerMenu);

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

	const handleClickCreateButton = () => {
		isOpened && dispatch(setIsOpened(false));
		navigate('/draw');
	};

	return (
		<div className={styles.images}>
			{isLoading && <Loader speed={2} />}
			<div className={styles.images__container}>
				{!images.length && (
					<div className={styles.images__container_notFound}>
						<Htag tag='h1'>No images</Htag>
					</div>
				)}
				{images &&
					images.map((image: Image) => (
						<ImageItem image={image} key={image.imageId} />
					))}
			</div>
			<div className={styles.images__create}>
				<Button appearance='primary' onClick={handleClickCreateButton}>
					+ Create
				</Button>
			</div>
		</div>
	);
};

export default memo(ImagesList);
