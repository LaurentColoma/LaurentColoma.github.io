import classes from "./Home.module.css";

// const skillsTexts = [
// 	"",
// 	"Volets roulants/battants",
// 	"Porte de garage",
// 	"Garde corps",
// 	"Barriere murale et brise vue",
// 	"Moustiquaires, etc...",
// ];

// const aboutTexts = [
// 	"Haute-Garonne, Tarn, Aude et Hérault",
// 	"7 rue la liberté, 31250 Revel",
// 	"06.11.19.53.41",
// 	"manadecoloma@hotmail.fr",
// ];

const Home = () => {
	return (
		<div className={classes.container}>
			<div className={classes.slideshow} />
		</div>
	);
};

export default Home;
