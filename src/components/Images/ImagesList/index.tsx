import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { database } from '../../../config/firebase';
import Image from '../../../interfaces/image.interface';
import State from '../../../interfaces/state.interface';
import { Button } from '../../UI';
import ImageItem from '../ImageItem';
import styles from './styles.module.scss';

const ImagesList = () => {
	const [loading, setLoading] = useState(false);
	const [images, setImages] = useState<Image[] | null>([]);

	const { uid } = useSelector((state: State) => state.user);

	const navigate = useNavigate();

	const fetchData = async (uid: string) => {
		setLoading(true);
		uid &&
			(await onValue(ref(database, `images`), (snapshot) => {
				if (snapshot.val()) {
					setImages(Object.values(snapshot.val()));
				} else setImages([]);
				setLoading(false);
			}));
	};

	useEffect(() => {
		fetchData(uid);
	}, [uid]);

	return (
		<>
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

export default ImagesList;
