import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import MapsLocation from './pages/processes/MapsLocation';
import PlateTectonics from './pages/processes/PlateTectonics';
import WeatheringErosion from './pages/processes/WeatheringErosion';
import FluvialOceans from './pages/processes/FluvialOceans';
import ClimateBiomes from './pages/processes/ClimateBiomes';
import References from './pages/References';
import styles from './styles/Layout.module.css';

export default function App() {
  return (
    <HashRouter>
      <div className={styles.appWrapper}>
        <Navbar />
        <main className={styles.mainContainer}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/processes/maps-location" element={<MapsLocation />} />
            <Route path="/processes/plate-tectonics" element={<PlateTectonics />} />
            <Route path="/processes/weathering-erosion" element={<WeatheringErosion />} />
            <Route path="/processes/fluvial-oceans" element={<FluvialOceans />} />
            <Route path="/processes/climate-biomes" element={<ClimateBiomes />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          PS 120 Research Portfolio • Built with React & TypeScript
        </footer>
      </div>
    </HashRouter>
  );
}