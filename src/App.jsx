import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const pingGitHub = async () => {
      try {
        const response = await fetch('https://api.github.com');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error pinging GitHub:', error);
      }
    };

    pingGitHub();
    
    const intervalId = setInterval(pingGitHub, 5000); // ping every 5 seconds

    return () => clearInterval(intervalId); // cleanup on unmount
  }, []);

  return (
    <div>
      Check the console for GitHub response.
    </div>
  );
};

export default App;
