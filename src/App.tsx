import Spotify from "./components/Spotify/Spotify";
import Clock from "./components/Clock/Clock";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Clock />
        <Spotify />
      </main>
    </div>
  );
}

export default App;
