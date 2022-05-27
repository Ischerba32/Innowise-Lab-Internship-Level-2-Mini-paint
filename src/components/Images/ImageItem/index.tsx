import React from 'react';
import { Card } from '../../UI';
import ImageItemProps from './props';
import styles from './styles.module.scss';

const ImageItem = ({ image }: ImageItemProps) => {
	return (
		<div className={styles.imageItem}>
			<Card>
				<img src={image.image} alt={image.imageId} />
				<div className={styles.imageItem__info}>
					<p>{image.date}</p>
				</div>
			</Card>
		</div>
	);
};

export default ImageItem;
