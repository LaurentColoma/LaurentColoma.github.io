import { Button, ButtonGroup } from "@mui/material";

import { CurrentPage } from "../../app";

import classes from "./Menu.module.css";
import { logo } from "@/public/assets/_index";

interface MenuProps {
	action: (value: CurrentPage) => void;
}

const Menu = ({ action }: MenuProps) => {
	return (
		<div className={classes.container}>
			<div className={classes.enterprise}>
				<img
					style={{
						/* doc here https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors */
						["--image-height" as string]: `${logo.height}px`,
						["--image-width" as string]: `${logo.width}px`,
					}}
					src={logo.src}
					alt="logo"
					className={classes.logo}
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
						Barrieres murale et piscine
					</Button>
					<Button
						className={classes.button}
						aria-label="gallery-menu-button"
						onClick={() => action(CurrentPage.PERGOLAS)}
					>
						Pergolas
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
					Contact
				</Button>
			</div>
		</div>
	);
};

export default Menu;
