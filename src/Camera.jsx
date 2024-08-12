import { useRef, useState, useEffect } from 'react';

const Camera = ({ sampleImg }) => {
	useEffect(() => {
		console.log(sampleImg)
	}, [sampleImg]);


	const getCameraRN = () => {
		window.ReactNativeWebView.postMessage("getCameraRN")
	};

	const imageSrc = sampleImg && !sampleImg.startsWith('data:image/')
		? `data:image/jpeg;base64,${sampleImg}`
		: sampleImg;


	return (
		<div>
			<h2>Camera Access</h2>

			{/* Display image if sampleImg is provided and is valid */}


			{sampleImg ? (
				<img
					src={imageSrc}
					alt="Captured"
					style={{ maxWidth: '100%', maxHeight: '500px' }} // Adjust as needed
				/>
			) : (
				<p>No image captured yet.</p>
			)}

			<button onClick={getCameraRN}>Capture Photo</button>

		</div>
	);
};

export default Camera;