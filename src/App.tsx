import { useState, useEffect } from "react";
import Spotify from "./components/Spotify/Spotify";
import Clock from "./components/Clock/Clock";
import Navbar from "./components/Navbar/Navbar";
import Unsplash from "./components/Unsplash/Unsplash";
import "./App.scss";

const App: React.FC = () => {
  const [spotify, setSpotify] = useState<boolean>(false);
  const [clock, setClock] = useState<boolean>(false);
  const [backgroundUrl, setBackgroundUrl] = useState<string>("");

  useEffect(() => {
    const savedBackgroundUrl = localStorage.getItem("backgroundUrl");
    if (savedBackgroundUrl) {
      setBackgroundUrl(`url(${savedBackgroundUrl})`);
    }
  }, []);

  const toggleSpotify = () => {
    setSpotify(!spotify);
  };

  const toggleClock = () => {
    setClock(!clock);
  };

  const handlePhotoClick = (photoUrl: string) => {
    setBackgroundUrl(`url(${photoUrl})`);
    localStorage.setItem("backgroundUrl", photoUrl);
  };

  return (
    <div className="App" style={{ backgroundImage: backgroundUrl }}>
      <header>
        <Navbar
          toggleSpotify={() => toggleSpotify()}
          toggleClock={() => toggleClock()}
        />
      </header>
      <main>
        {clock && <Clock />}
        {spotify && <Spotify />}
      </main>
      <footer>
        <div className="settings">
          <Unsplash onPhotoClick={handlePhotoClick} />
        </div>
      </footer>
    </div>
  );
};

export default App;
