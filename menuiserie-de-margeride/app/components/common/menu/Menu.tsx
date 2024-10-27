import { ButtonGroup, Button } from "@mui/material";
import { CurrentPage } from "../../app";

interface MenuProps {
	action: (value: CurrentPage) => void;
}

const Menu = ({ action }: MenuProps) => {
	return (
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
				Gallerie
			</Button>
		</ButtonGroup>
	);
};

export default Menu;
