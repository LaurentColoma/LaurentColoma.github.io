import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const LocalisationMap = () => {
	return (
		<Map
			initialViewState={{
				longitude: 2.00099,
				latitude: 43.45941,
				zoom: 14,
			}}
			style={{ width: 600, height: 400 }}
			mapStyle="https://api.maptiler.com/maps/streets/style.json?key=PzN4DInMpNIt9k0jV2v1"
		/>
	);
};

export default LocalisationMap;
