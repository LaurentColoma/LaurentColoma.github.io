"use client";

import { useState } from "react";
import Menu from "./common/menu/Menu";
import Home from "./home/Home";
import Gallery from "./gallery/Gallery";
import Footer from "./common/footer/Footer";

import classes from "./app.module.css";

export enum CurrentPage {
	HOME = "home",
	VOLETS = "volets",
	GARAGE_DOOR = "garage door",
	GUARDRAIL = "guardrail",
	BARRIER = "barrier",
	OTHERS = "others",
	CONTACTS = "contacts",
}

const App = () => {
	const [currentPage, setCurrentPage] = useState<CurrentPage>(CurrentPage.HOME);

	const onMenuClick = (value: CurrentPage) => setCurrentPage(value);

	return (
		<div className={classes.container}>
			<Menu action={onMenuClick} currentPage={currentPage} />
			<div className={classes.content}>
				{currentPage === CurrentPage.HOME && <Home />}
				{currentPage !== CurrentPage.HOME &&
					currentPage !== CurrentPage.CONTACTS && <Gallery />}
			</div>
			<Footer />
		</div>
	);
};

export default App;
