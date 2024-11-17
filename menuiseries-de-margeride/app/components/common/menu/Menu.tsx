import { Button } from "@mui/material";

import { CurrentPage } from "../../app";

import classes from "./Menu.module.css";
import { logo } from "../../../../public/assets";

interface MenuProps {
	action: (value: CurrentPage) => void;
	currentPage: CurrentPage;
}

const Menu = ({ action, currentPage }: MenuProps) => {
	return (
		<div className={classes.container}>
			<div className={classes.enterprise}>
				<img
					src={logo.src}
					alt="logo"
					height={logo.height / 5}
					width={logo.width / 5}
				/>
				<span className={classes.enterpriseText}>Menuiseries de Margeride</span>
				<span>Fourniture et pose de Menuiseries (PVC - BOIS - ALUMINIUM)</span>
			</div>
			{currentPage === CurrentPage.GALLERY && (
				<Button
					className={classes.button}
					aria-label="home-menu-button"
					onClick={() => action(CurrentPage.HOME)}
				>
					Accueil
				</Button>
			)}
			{currentPage === CurrentPage.HOME && (
				<Button
					className={classes.button}
					aria-label="gallery-menu-button"
					onClick={() => action(CurrentPage.GALLERY)}
				>
					Galerie
				</Button>
			)}
		</div>
	);
};

export default Menu;
