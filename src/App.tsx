import { useState } from "react";
import Spotify from "./components/Spotify/Spotify";
import Clock from "./components/Clock/Clock";
import Navbar from "./components/Navbar/Navbar";
import Unsplash from "./components/Unsplash/Unsplash";
import "./App.scss";

function App(): JSX.Element {
  const [spotify, setSpotify] = useState<boolean>(false);
  const [clock, setClock] = useState<boolean>(false);

  const toggleSpotify = () => {
    setSpotify(!spotify);
  };

  const toggleClock = () => {
    setClock(!clock);
  };

  return (
    <div className="App">
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
          <Unsplash />
        </div>
      </footer>
    </div>
  );
}

export default App;
