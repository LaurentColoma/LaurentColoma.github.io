import { Button, ButtonGroup } from "@mui/material";

import { CurrentPage } from "../../app";

import classes from "./Menu.module.css";
import { logo } from "../../../../public/assets";

interface MenuProps {
	action: (value: CurrentPage) => void;
}

const Menu = ({ action }: MenuProps) => {
	return (
		<div className={classes.container}>
			<div className={classes.enterprise}>
				<img
					src={logo.src}
					alt="logo"
					height={logo.height / 5}
					width={logo.width / 5}
				/>
				<div className={classes.titleContainer}>
					<span className={classes.enterpriseTitle}>
						Menuiseries de Margeride
					</span>
					<span className={classes.enterpriseSubtitle}>
						Fourniture et pose de Menuiseries (PVC - BOIS - ALUMINIUM)
					</span>
				</div>
			</div>

			<div className={classes.buttonContainer}>
				<Button
					variant="contained"
					className={classes.button}
					aria-label="home-menu-button"
					onClick={() => action(CurrentPage.HOME)}
				>
					Accueil
				</Button>
				<ButtonGroup variant="contained" className={classes.buttonGroup}>
					<Button
						className={classes.button}
						aria-label="gallery-menu-button"
						onClick={() => action(CurrentPage.VOLETS)}
					>
						Volets roulants/battants
					</Button>
					<Button
						className={classes.button}
						aria-label="gallery-menu-button"
						onClick={() => action(CurrentPage.GARAGE_DOOR)}
					>
						Portes de garage
					</Button>
					<Button
						className={classes.button}
						aria-label="gallery-menu-button"
						onClick={() => action(CurrentPage.GUARDRAIL)}
					>
						Garde corps
					</Button>
					<Button
						className={classes.button}
						aria-label="gallery-menu-button"
						onClick={() => action(CurrentPage.BARRIER)}
					>
						Barrieres murale et picine
					</Button>
					<Button
						className={classes.button}
						aria-label="gallery-menu-button"
						onClick={() => action(CurrentPage.OTHERS)}
					>
						Autres
					</Button>
				</ButtonGroup>
				<Button
					className={classes.contactButton}
					variant="contained"
					aria-label="gallery-menu-button"
					onClick={() => action(CurrentPage.CONTACTS)}
				>
					Informations de contact
				</Button>
			</div>
		</div>
	);
};

export default Menu;
