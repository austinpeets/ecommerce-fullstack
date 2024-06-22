import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';

function App() {

  const [backendData, setBackendData] = useState ([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      <Navbar/>
    </div>
  );
}

export default App;
