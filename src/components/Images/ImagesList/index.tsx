import { onValue, ref } from 'firebase/database';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { database } from '../../../config/firebase';
import Image from '../../../interfaces/image.interface';
import State from '../../../interfaces/state.interface';
import {
	getImagesAction,
	getImagesSuccessAction,
	setImagesAction,
} from '../../../redux/actions/actionCreators/imagesActions';
import { selectImagesByFilter } from '../../../redux/selectors';
import { Button, Loader } from '../../UI';
import ImageItem from '../ImageItem';
import styles from './styles.module.scss';

const ImagesList = () => {
	// const [loading, setLoading] = useState(false);
	// const [images, setImages] = useState<Image[] | null>([]);
	const dispatch = useDispatch();

	const { uid } = useSelector((state: State) => state.user);
	const { isLoading } = useSelector((state: State) => state.images);
	const images = useSelector(selectImagesByFilter);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			// setLoading(true);
			dispatch(getImagesAction());
			console.log('fetching images');
			if (uid) {
				await onValue(ref(database, `images`), (snapshot) => {
					if (snapshot.val()) {
						console.log('fetched images');
						// setImages(Object.values(snapshot.val()));
						dispatch(setImagesAction(Object.values(snapshot.val())));
					}
					// setLoading(false);
					dispatch(getImagesSuccessAction());
				});
			}
		};
		fetchData();
		// dispatch(getImagesAction());
	}, [uid, dispatch]);

	// if (isLoading) {
	// 	return <Loader speed={2} />;
	// }

	return (
		<>
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
		</>
	);
};

export default memo(ImagesList);
