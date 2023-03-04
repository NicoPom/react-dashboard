import { useState } from "react";

import Spotify from "./components/Spotify/Spotify";
import Clock from "./components/Clock/Clock";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

function App() {
  const [spotify, setSpotify] = useState(false);
  const [clock, setClock] = useState(false);

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
    </div>
  );
}

export default App;
