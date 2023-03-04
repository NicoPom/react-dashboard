
import spotifySvg from '../../assets/spotify.svg'
import clockSvg from '../../assets/clock.svg'

function Navbar() {
  return <nav>
        <ul>
          <li>
            <img src={spotifySvg} alt="spotify_svg" />
          </li>
          <li>
            <img src={clockSvg} alt="clock_svg" />
          </li>
        </ul>
      </nav>;
}

export default Navbar;