import { useRef, useState, useEffect } from 'react';

const Camera = () => {
	const videoRef = useRef(null);
	const canvasRef = useRef(null);
	const [capturedImage, setCapturedImage] = useState(null);

	useEffect(() => {
		const getUserMedia = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({ video: true });
				if (videoRef.current) {
					videoRef.current.srcObject = stream;
				}
			} catch (error) {
				console.error('Error accessing camera: ', error);
			}
		};

		getUserMedia();
	}, []);

	const capture = () => {
		const context = canvasRef.current.getContext('2d');
		context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
		setCapturedImage(canvasRef.current.toDataURL('image/png'));
	};

	return (
		<div>
			<h2>Camera Access</h2>
			<video ref={videoRef} autoPlay style={{ width: '100%', height: 'auto' }} />
			<button onClick={capture}>Capture Photo</button>
			<canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480" />
			{capturedImage && (
				<div>
					<h3>Captured Image:</h3>
					<img src={capturedImage} alt="Captured" />
				</div>
			)}
		</div>
	);
};

export default Camera;