// FileUpload.js
import { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (file) {
      // You can handle the file upload here, e.g., send it to a server
      console.log("File to upload:", file);

      const formData = new FormData();
      formData.append("file", file);

      fetch("/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("File uploaded successfully:", data);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    }
  };

  return (
    <div>
      <h2>Upload a File</h2>
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div>
          <h3>Selected File:</h3>
          <p>{file.name}</p>
          <button onClick={handleFileUpload}>Upload File</button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
