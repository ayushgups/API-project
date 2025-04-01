import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then(res => res.json())
      .then(data => setBackendData(data.message));
  }, []);

  return (
    <div>
      <h1>React + Express App</h1>
      <p>{backendData || 'Loading...'}</p>
    </div>
  );
}

export default App;
