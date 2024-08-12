// Geolocation.js
import { useState } from 'react';

const Geolocation = () => {
	const [location, setLocation] = useState({ latitude: null, longitude: null });
	const [error, setError] = useState(null);

	const getLocationRN = () => {
		window.ReactNativeWebView.postMessage("getLocationRN")
	};

	return (
		<div>
			<h2>Geolocation</h2>
			<button onClick={getLocationRN}>Get Location</button>
			{location.latitude && location.longitude ? (
				<div>
					<h3>Your Location:</h3>
					<p>Latitude: {location.latitude}</p>
					<p>Longitude: {location.longitude}</p>
				</div>
			) : error ? (
				<div>
					<p>Error: {error}</p>
				</div>
			) : null}
		</div>
	);
};

export default Geolocation;
