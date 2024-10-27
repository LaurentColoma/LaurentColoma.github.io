import { Card } from "@mui/material";
import { camion_contact } from "../../assets";

import classes from "./Home.module.css";

const Home = () => {
	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<div className={classes.description}>
					<Card>
						<div className={classes.image}>
							<img
								alt="contacts"
								src={camion_contact.src}
								height={camion_contact.height / 3}
								width={camion_contact.width / 3}
							/>
						</div>
					</Card>

					<Card>
						<div className={classes.skills}>
							<span className={classes.text}>
								Fourniture et pose de Menuiseries (PVC - BOIS - ALUMINIUM)
							</span>
							<span className={classes.text}>Volets roulants/battants</span>
							<span className={classes.text}>Porte de garage</span>
							<span className={classes.text}>Garde corps</span>
							<span className={classes.text}>Barriere murale et Brise vue</span>
							<span className={classes.text}> Moustiquaires, etc...</span>
						</div>
					</Card>

					<Card>
						<div className={classes.about}>
							<span className={classes.boldText}>
								Haute-Garonne, Tarn, Aude et Hérault
							</span>
							<span className={classes.boldText}>
								7 rue la liberté, 31250 Revel
							</span>
							<span className={classes.boldText}>06.11.19.53.41</span>
							<span className={classes.boldText}>manadecoloma@hotmail.fr</span>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Home;
