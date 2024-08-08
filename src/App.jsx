import React, { useEffect, useRef } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileUpload from './FileUpload'
import Camera from './Camera'
import Geolocation from './Geolocation'

function App() {

  // useEffect(()=>{

  //    window.addEventListener("message", (event) => {
  //       const data = event.data;
  //       document.body.style.backgroundColor = 'red';
  //       alert("Data received from React Native:", data);
  //     });
  // },[])

  
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
        <Camera />


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
