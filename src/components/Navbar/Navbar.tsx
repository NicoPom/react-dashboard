import spotifySvg from "../../assets/spotify.svg";
import clockSvg from "../../assets/clock.svg";

interface NavbarProps {
  toggleSpotify: () => void;
  toggleClock: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSpotify, toggleClock }) => (
  <nav className="navbar widget">
    <ul>
      <li>
        <button>
          <img src={spotifySvg} alt="spotify_svg" onClick={toggleSpotify} />
        </button>
      </li>
      <li>
        <button>
          <img src={clockSvg} alt="clock_svg" onClick={toggleClock} />
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
