import ContactForm from "../common/form/ContactForm";
import LocalisationMap from "../common/map/LocalisationMap";
import BlockText from "../home/block/BlockText";

import classes from "./Contact.module.css";

const aboutTexts = [
	"Stéphane Coloma",
	"7 rue la liberté, 31250 Revel",
	"06.11.19.53.41",
	"manadecoloma@hotmail.fr",
	"Haute-Garonne, Tarn, Aude et Hérault",
];

const horaire = [
	"Lundi: 8h30 - 17h30",
	"Mardi: 8h30 - 17h30",
	"Mercredi: 8h30 - 17h30",
	"Jeudi: 8h30 - 17h30",
	"Vendredi: 8h30 - 17h30",
	"Samedi: Fermé",
	"Dimanche: Fermé",
];

const Contact = () => {
	return (
		<div className={classes.container}>
			<div className={classes.firstSection}>
				<div className={classes.infos}>
					<BlockText contentText={aboutTexts} />
					<BlockText contentText={horaire} />
				</div>
				<div className={classes.map}>
					<LocalisationMap />
				</div>
			</div>
			<ContactForm />
		</div>
	);
};

export default Contact;
