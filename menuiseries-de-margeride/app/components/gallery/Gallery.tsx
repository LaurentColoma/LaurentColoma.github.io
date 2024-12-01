import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import * as images from "@/public/assets/_index";
import { CurrentPage } from "../app";

const volets = [
	{
		original: images.volets_1.src,
		thumbnail: images.volets_1.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.volets_2.src,
		thumbnail: images.volets_2.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.volets_3.src,
		thumbnail: images.volets_3.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.volets_4.src,
		thumbnail: images.volets_4.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
];
const garage_door = [
	{
		original: images.porte_garage_1.src,
		thumbnail: images.porte_garage_1.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.porte_garage_2.src,
		thumbnail: images.porte_garage_2.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.porte_garage_3.src,
		thumbnail: images.porte_garage_3.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.porte_garage_4.src,
		thumbnail: images.porte_garage_4.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.porte_garage_5.src,
		thumbnail: images.porte_garage_5.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.porte_garage_6.src,
		thumbnail: images.porte_garage_6.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.porte_garage_7.src,
		thumbnail: images.porte_garage_7.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.porte_garage_8.src,
		thumbnail: images.porte_garage_8.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.porte_garage_9.src,
		thumbnail: images.porte_garage_9.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.porte_garage_10.src,
		thumbnail: images.porte_garage_10.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
];
const guardrail = [
	{
		original: images.garde_corps_1.src,
		thumbnail: images.garde_corps_1.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.garde_corps_2.src,
		thumbnail: images.garde_corps_2.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.garde_corps_3.src,
		thumbnail: images.garde_corps_3.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.garde_corps_4.src,
		thumbnail: images.garde_corps_4.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.garde_corps_5.src,
		thumbnail: images.garde_corps_5.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.garde_corps_6.src,
		thumbnail: images.garde_corps_6.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
];
const barrier = [
	{
		original: images.cloture_1.src,
		thumbnail: images.cloture_1.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.cloture_2.src,
		thumbnail: images.cloture_2.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.cloture_3.src,
		thumbnail: images.cloture_3.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.cloture_4.src,
		thumbnail: images.cloture_4.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.cloture_5.src,
		thumbnail: images.cloture_5.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.cloture_6.src,
		thumbnail: images.cloture_6.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.barriere_piscine_1.src,
		thumbnail: images.barriere_piscine_1.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.barriere_piscine_2.src,
		thumbnail: images.barriere_piscine_2.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
];
const pergolas = [
	{
		original: images.pergolas_1.src,
		thumbnail: images.pergolas_1.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.pergolas_2.src,
		thumbnail: images.pergolas_2.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.pergolas_3.src,
		thumbnail: images.pergolas_3.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.pergolas_4.src,
		thumbnail: images.pergolas_4.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
];
const others = [
	{
		original: images.autre_1.src,
		thumbnail: images.autre_1.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_2.src,
		thumbnail: images.autre_2.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_3.src,
		thumbnail: images.autre_3.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_4.src,
		thumbnail: images.autre_4.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_7.src,
		thumbnail: images.autre_7.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_8.src,
		thumbnail: images.autre_8.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_9.src,
		thumbnail: images.autre_9.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_10.src,
		thumbnail: images.autre_10.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_11.src,
		thumbnail: images.autre_11.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_12.src,
		thumbnail: images.autre_12.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_13.src,
		thumbnail: images.autre_13.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_14.src,
		thumbnail: images.autre_14.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_15.src,
		thumbnail: images.autre_15.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_16.src,
		thumbnail: images.autre_16.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_17.src,
		thumbnail: images.autre_17.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_19.src,
		thumbnail: images.autre_19.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.autre_20.src,
		thumbnail: images.autre_20.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.porte_1.src,
		thumbnail: images.porte_1.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.porte_2.src,
		thumbnail: images.porte_1.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.porte_3.src,
		thumbnail: images.porte_3.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.porte_4.src,
		thumbnail: images.porte_4.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.porte_5.src,
		thumbnail: images.porte_5.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.moustiquaire_1.src,
		thumbnail: images.moustiquaire_1.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.moustiquaire_2.src,
		thumbnail: images.moustiquaire_2.src,
		thumbnailHeight: 69,
		thumbnailWidth: 92,
	},
	{
		original: images.moustiquaire_3.src,
		thumbnail: images.moustiquaire_3.src,
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
			{currentPage === CurrentPage.PERGOLAS && (
				<ImageGallery items={pergolas} />
			)}
			{currentPage === CurrentPage.OTHERS && <ImageGallery items={others} />}
		</>
	);
};

export default Gallery;
