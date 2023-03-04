
import spotifySvg from '../../assets/spotify.svg'
import timeSvg from '../../assets/time.svg'

export function Navbar() {
  return <nav>
        <ul>
          <li>
            <img src={spotifySvg} alt="spotify_svg" />
          </li>
          <li>
            <img src={timeSvg} alt="time_svg" />
          </li>
        </ul>
      </nav>;
}
  