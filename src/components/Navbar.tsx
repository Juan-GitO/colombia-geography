import { Link } from 'react-router-dom';
import styles from '../styles/Layout.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.navInner}>
        <Link to="/" className={styles.brand}>
          Exploring Colombia
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLink}>About</Link>
          </li>

          <li className={styles.dropdown}>
            <button type="button" className={styles.dropdownTrigger}>
              Earth Processes ▾
            </button>
            <ul className={styles.dropdownMenu}>
              <li>
                <Link to="/processes/maps-location" className={styles.dropdownItem}>
                  1. Maps, Location & Cartographers
                </Link>
              </li>
              <li>
                <Link to="/processes/plate-tectonics" className={styles.dropdownItem}>
                  2. Plate Tectonics, Earthquakes & Volcanoes
                </Link>
              </li>
              <li>
                <Link to="/processes/weathering-erosion" className={styles.dropdownItem}>
                  3. Weathering, Mass Wasting & Erosion
                </Link>
              </li>
              <li>
                <Link to="/processes/fluvial-oceans" className={styles.dropdownItem}>
                  4. Fluvial Processes, Oceans & Coastlines
                </Link>
              </li>
              <li>
                <Link to="/processes/climate-biomes" className={styles.dropdownItem}>
                  5. Climate Controls, Biomes & Climate Change
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/references" className={styles.navLink}>References</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}