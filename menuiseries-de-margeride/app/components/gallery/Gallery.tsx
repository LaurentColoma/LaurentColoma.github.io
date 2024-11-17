import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import * as images from "../../../public/assets/index";
import { CurrentPage } from "../app";

const volets = [
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
		original: images.image_52.src,
		thumbnail: images.image_52.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_58.src,
		thumbnail: images.image_58.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
];
const garage_door = [
	{
		original: images.image_13.src,
		thumbnail: images.image_13.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_46.src,
		thumbnail: images.image_46.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_47.src,
		thumbnail: images.image_47.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_48.src,
		thumbnail: images.image_48.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_49.src,
		thumbnail: images.image_49.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
];
const guardrail = [
	{
		original: images.image_10.src,
		thumbnail: images.image_10.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_38.src,
		thumbnail: images.image_38.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_39.src,
		thumbnail: images.image_39.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
];
const barrier = [
	{
		original: images.image_30.src,
		thumbnail: images.image_30.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_31.src,
		thumbnail: images.image_31.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_32.src,
		thumbnail: images.image_32.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_33.src,
		thumbnail: images.image_33.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
];
const others = [
	{
		original: images.image_28.src,
		thumbnail: images.image_28.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_29.src,
		thumbnail: images.image_29.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_53.src,
		thumbnail: images.image_53.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_55.src,
		thumbnail: images.image_55.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_57.src,
		thumbnail: images.image_57.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_54.src,
		thumbnail: images.image_54.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.image_56.src,
		thumbnail: images.image_56.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
];

interface GalleryProps {
	currentPage: CurrentPage;
}

const Gallery = ({ currentPage }: GalleryProps) => {
	return (
		<>
			{currentPage === CurrentPage.VOLETS && <ImageGallery items={volets} />}
			{currentPage === CurrentPage.GARAGE_DOOR && (
				<ImageGallery items={garage_door} />
			)}
			{currentPage === CurrentPage.GUARDRAIL && (
				<ImageGallery items={guardrail} />
			)}
			{currentPage === CurrentPage.BARRIER && <ImageGallery items={barrier} />}
			{currentPage === CurrentPage.OTHERS && <ImageGallery items={others} />}
		</>
	);
};

export default Gallery;
