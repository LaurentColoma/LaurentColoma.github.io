import { ButtonGroup, Button } from "@mui/material";
import { CurrentPage } from "../../app";

import classes from "./Menu.module.css";

interface MenuProps {
	action: (value: CurrentPage) => void;
}

const Menu = ({ action }: MenuProps) => {
	return (
		<div className={classes.container}>
			<ButtonGroup variant="outlined" aria-label="main-menu-button-group">
				<Button
					aria-label="home-menu-button"
					onClick={() => action(CurrentPage.HOME)}
				>
					Accueil
				</Button>
				<Button
					aria-label="gallery-menu-button"
					onClick={() => action(CurrentPage.GALLERY)}
				>
					Galerie
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default Menu;
