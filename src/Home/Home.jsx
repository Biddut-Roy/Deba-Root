import { useEffect, useState } from "react";


const Home = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
      // Check if the browser supports geolocation
      if (navigator.geolocation) {
        // Get the current position
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
          },
          (error) => {
            console.error('Error getting location:', error.message);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }, []);
  
    return (
      <div>
        <h1>Current Location</h1>
        {location ? (
          <div>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </div>
        ) : (
          <p>Loading location...</p>
        )}
      </div>
    );
};

export default Home;