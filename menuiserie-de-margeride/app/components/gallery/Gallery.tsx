import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import * as images from "../../../public/assets/index";
import classes from "./Gallery.module.css";

const gallery = [
	{
		original: images.image_1.src,
		thumbnail: images.image_1.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_2.src,
		thumbnail: images.image_2.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_3.src,
		thumbnail: images.image_3.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_4.src,
		thumbnail: images.image_4.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_5.src,
		thumbnail: images.image_5.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_6.src,
		thumbnail: images.image_6.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_7.src,
		thumbnail: images.image_7.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_8.src,
		thumbnail: images.image_8.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_9.src,
		thumbnail: images.image_9.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_10.src,
		thumbnail: images.image_10.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_11.src,
		thumbnail: images.image_11.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_12.src,
		thumbnail: images.image_12.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_13.src,
		thumbnail: images.image_13.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_14.src,
		thumbnail: images.image_14.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_15.src,
		thumbnail: images.image_15.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_16.src,
		thumbnail: images.image_16.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_17.src,
		thumbnail: images.image_17.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_18.src,
		thumbnail: images.image_18.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_19.src,
		thumbnail: images.image_19.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_20.src,
		thumbnail: images.image_20.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_21.src,
		thumbnail: images.image_21.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_22.src,
		thumbnail: images.image_22.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_23.src,
		thumbnail: images.image_23.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_24.src,
		thumbnail: images.image_24.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
];

const Gallery = () => {
	return (
		<div className={classes.container}>
			<ImageGallery items={gallery} />
		</div>
	);
};

export default Gallery;
