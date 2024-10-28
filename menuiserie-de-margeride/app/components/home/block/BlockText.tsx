import { Card } from "@mui/material";

import classes from "./Block.module.css";

interface BlockTextProps {
	contentText: Array<string>;
	specificClass?: string;
}

const BlockText = ({ contentText, specificClass }: BlockTextProps) => {
	return (
		<Card className={`${classes.container} ${specificClass}`}>
			{contentText.map((text, index) => (
				<span className={classes.text} key={`image-${index}`}>
					{text}
				</span>
			))}
		</Card>
	);
};

export default BlockText;
