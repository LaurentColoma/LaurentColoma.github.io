import { Card } from "@mui/material";
import { StaticImageData } from "next/image";

import classes from "./Block.module.css";

interface BlockImageProps {
	contentImage: StaticImageData;
}

const BlockImage = ({ contentImage }: BlockImageProps) => {
	return (
		<Card className={classes.container}>
			<img
				src={contentImage.src}
				alt="contentImage"
				height={contentImage.height / 3}
				width={contentImage.width / 3}
			/>
		</Card>
	);
};

export default BlockImage;
