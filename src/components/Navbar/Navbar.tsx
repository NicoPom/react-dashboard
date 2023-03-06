import spotifySvg from "../../assets/spotify.svg";
import clockSvg from "../../assets/clock.svg";
import timerSvg from "../../assets/timer.svg";
import "./navbar.scss";

interface NavbarProps {
  toggleSpotify: () => void;
  toggleClock: () => void;
  togglePomodoro: () => void;
}

const Navbar = ({
  toggleSpotify,
  toggleClock,
  togglePomodoro,
}: NavbarProps) => (
  <nav className="navbar widget">
    <ul>
      <li>
        <img src={spotifySvg} alt="spotify_svg" onClick={toggleSpotify} />
      </li>
      <li>
        <img src={clockSvg} alt="clock_svg" onClick={toggleClock} />
      </li>
      <li>
        <img src={timerSvg} alt="timer_svg" onClick={togglePomodoro} />
      </li>
    </ul>
  </nav>
);

export default Navbar;
