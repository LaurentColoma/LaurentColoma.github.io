"use client";

import { useState } from "react";
import Menu from "./common/menu/Menu";
import Home from "./home/Home";
import Gallery from "./gallery/Gallery";
import Footer from "./common/footer/Footer";

import classes from "./app.module.css";

export enum CurrentPage {
	HOME = "home",
	GALLERY = "gallery",
}

const App = () => {
	const [currentPage, setCurrentPage] = useState<CurrentPage>(CurrentPage.HOME);

	const onMenuClick = (value: CurrentPage) => {
		console.log(value);
		setCurrentPage(value);
	};

	return (
		<div className={classes.container}>
			<Menu action={onMenuClick} />
			<div className={classes.content}>
				{currentPage === CurrentPage.HOME && <Home />}
				{currentPage === CurrentPage.GALLERY && <Gallery />}
			</div>
			<Footer />
		</div>
	);
};

export default App;
