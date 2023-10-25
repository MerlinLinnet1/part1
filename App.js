import React, { useState, useEffect } from 'react';

const App = () => {
  const [cultureInfo, setCultureInfo] = useState(null);

  useEffect(() => {
    // Fetch culture information from the backend
    fetch('/api/culture')
      .then((response) => response.json())
      .then((data) => setCultureInfo(data));
  }, []);

  return (
    <div>
      <h1>Indian Culture Information</h1>
      {cultureInfo ? (
        <ul>
          {cultureInfo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Loading culture information...</p>
      )}
    </div>
  );
};

export default App;