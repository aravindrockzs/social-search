import React, { useEffect, useRef, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileUpload from './FileUpload'
import Camera from './Camera'
import Geolocation from './Geolocation'

function App() {

  const [sampleImg, setSampleImg] = useState(null)

  useEffect(() => {
    function handleEvent(event) {

      let type = event.type

      if (type === 'getGeolocation') {
        try {
          console.log(event.detail);
          alert(event.detail)
        } catch (error) {
          console.error("Failed to parse message data:", error);
          alert("Received invalid data");
        }
      }

      if (type === 'getBase64Image') {

        alert('base64img is received')
        alert(event.detail)
        console.log(event.detail);
        setSampleImg(event.detail)

      }


    }

    window.addEventListener('getGeolocation', handleEvent);
    window.addEventListener('getBase64Image', handleEvent);



    return () => {

      window.removeEventListener('getGeolocation', handleEvent);
      window.removeEventListener('getBase64Image', handleEvent);
    }


  }, [])


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <FileUpload />

        <h1>Camera Access Example</h1>
        <Camera sampleImg={sampleImg} />


        <h1>Geolocation Access</h1>
        <Geolocation />



        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
