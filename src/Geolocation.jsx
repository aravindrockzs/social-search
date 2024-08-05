// Geolocation.js
import { useState } from 'react';

const Geolocation = () => {
	const [location, setLocation] = useState({ latitude: null, longitude: null });
	const [error, setError] = useState(null);

	const handleGetLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setLocation({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					});
				},
				(error) => {
					setError(error.message);
				}
			);
		} else {
			setError('Geolocation is not supported by this browser.');
		}
	};

	return (
		<div>
			<h2>Geolocation</h2>
			<button onClick={handleGetLocation}>Get Location</button>
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
