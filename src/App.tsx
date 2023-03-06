import { useState, useEffect } from "react";

// components
import Spotify from "./components/Spotify/Spotify";
import Clock from "./components/Clock/Clock";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import Navbar from "./components/Navbar/Navbar";
import Unsplash from "./components/Unsplash/Unsplash";

// styles
import "./App.scss";

const App: React.FC = () => {
  const [spotify, setSpotify] = useState<boolean>(false);
  const [clock, setClock] = useState<boolean>(false);
  const [pomodoro, setPomodoro] = useState<boolean>(false);
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

  const togglePomodoro = () => {
    setPomodoro(!pomodoro);
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
          togglePomodoro={() => togglePomodoro()}
        />
      </header>
      <main>
        {clock && <Clock />}
        {spotify && <Spotify />}
        {pomodoro && <Pomodoro />}
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
