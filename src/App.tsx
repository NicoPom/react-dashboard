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
        <div className="spotify">
          <h2>Spotify</h2>
          <p>Nothing playing</p>
        </div>
      </main>
    </div>
  );
}

export default App;
