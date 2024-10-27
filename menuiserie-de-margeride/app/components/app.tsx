import { useState } from "react";

enum CurrentPage {
	HOME = "home",
	GALLERY = "gallery",
}

const App = () => {
	const [currentPage, setCurrentPage] = useState<CurrentPage>(CurrentPage.HOME);

	return <>Hello, World?!</>;
};

export default App;
