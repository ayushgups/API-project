import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5050/api/message')
      .then(res => res.json())
      .then(data => setBackendData(data.message))
      .catch(err => console.error('Error fetching backend:', err));
  }, []);

  return (
    <div>
      <h1>React + Express App</h1>
      <h2>Backend Message: {backendData} </h2>
      <p>{backendData || 'Loading...'}</p>
    </div>
  );
}

export default App;
