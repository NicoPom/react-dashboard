import { Navbar } from './components/Navbar/Navbar'
import './App.scss'



function App() {
  

  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <div className="time">
          <h2>Time</h2>
          <p>00:00</p>
        </div>
        <div className="spotify">
          <h2>Spotify</h2>
          <p>Nothing playing</p>
        </div>
      </main>

    </div>
  )
}

export default App
