import Overlay from "../common/overlay/Overlay";
import BlockText from "./block/BlockText";

import classes from "./Home.module.css";

const skillsTexts = [
	"Fourniture et pose de Menuiseries (PVC - BOIS - ALUMINIUM)",
	"Volets roulants/battants",
	"Porte de garage",
	"Garde corps",
	"Barriere murale et brise vue",
	"Moustiquaires, etc...",
];

const aboutTexts = [
	"Haute-Garonne, Tarn, Aude et Hérault",
	"7 rue la liberté, 31250 Revel",
	"06.11.19.53.41",
	"manadecoloma@hotmail.fr",
];

const Home = () => {
	return (
		<div className={classes.container}>
			<div className={classes.slideshow} />
			<Overlay />
			<BlockText
				contentText={skillsTexts}
				specificClass={classes.skillsTexts}
			/>
			<BlockText contentText={aboutTexts} specificClass={classes.aboutTexts} />
		</div>
	);
};

export default Home;
