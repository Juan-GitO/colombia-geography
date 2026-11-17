import { useState } from 'react';
import styles from '../styles/Layout.module.css';

export default function Home() {
  const [isQuimbayaOpen, setIsQuimbayaOpen] = useState(false);

  return (
    <div>
      <section className={styles.videoHero}>
        <div className={styles.youtubeBgWrapper}>
          <iframe
            src="https://www.youtube.com/embed/CMOoy776Pm4?autoplay=1&mute=1&controls=0&start=9&loop=1&playlist=CMOoy776Pm4&playsinline=1&rel=0&modestbranding=1"
            title="Colombia Aerial Background Video"
            allow="autoplay; encrypted-media"
          />
        </div>


        <div className={styles.videoOverlay}>
          <h1 className={styles.heroCountryTitle}>Colombia</h1>
          <p className={styles.heroCountrySubtitle}>
            From the Andean cordilleras to the Caribbean and Pacific coasts—exploring Colombia’s dynamic earth systems and cultural landscapes.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Country Overview</h2>
        <div className={styles.grid2}>
          {/* Row 1: Full-Width Historical Card with Quimbaya Goldwork */}
          <article className={`${styles.card} ${styles.fullWidthCard}`}>
            <div>
              <h3>Historical Background</h3>
              <p>
                Colombia has a rich history shaped by indigenous civilizations, Spanish colonization, and its journey to independence. The country’s diverse cultural heritage reflects the blending of these influences, evident in its architecture, traditions, and social fabric.
              </p>
            </div>

            <div className={styles.cardMediaCallout}>
              <button
                type="button"
                className={styles.thumbWrapper}
                onClick={() => setIsQuimbayaOpen(true)}
                aria-label="Expand Quimbaya goldwork image"
              >
                <img
               src="quimbayaStatue.webp"
               alt="Pre-Columbian Quimbaya gold figurines"
               className={styles.cardThumb}
                />
                <span className={styles.thumbOverlay}>Expand</span>
              </button>
              <div className={styles.cardMediaText}>
                <strong>Pre-Colombian Quimbaya Goldwork (c. 300 BC – 1000 AD)</strong>
                Crafted in the Cauca River valley using lost-wax casting and <em>tumbaga</em>, these ceremonial figures reflect the metallurgical mastery that fueled European legends of <em>El Dorado</em>.
              </div>
            </div>
          </article>

          {/* Row 2: Cultural & Economic Cards Side-by-Side */}
          <article className={styles.card}>
            <h3>Cultural Heritage</h3>
            <p>
               Shaped by indigenous, African, and European influences, Colombia's cultural heritage is reflected in its music, dance, festivals, and cuisine. The country celebrates a variety of cultural expressions, from the vibrant Carnival of Barranquilla to traditional folk music and dance forms like cumbia and vallenato.
            </p>
          </article>

          <article className={styles.card}>
            <div>
              <h3>Economic Profile</h3>
              <ul className={styles.econList}>
                <li className={styles.econItem}>
                  <span>• GDP (in billions)</span>
                  <strong className={styles.econValue}>$418.54B</strong>
                </li>
                <li className={styles.econItem}>
                  <span>• GDP per Capita</span>
                  <strong className={styles.econValue}>$18 500</strong>
                </li>
              </ul>

              <span className={styles.exportLabel}>• Major Exports</span>
              <ul className={styles.exportTags}>
                <li className={styles.exportTag}>🛢️ Oil</li>
                <li className={styles.exportTag}>☕ Coffee</li>
                <li className={styles.exportTag}>🌺 Flowers</li>
                <li className={styles.exportTag}>🍌 Bananas</li>
                <li className={styles.exportTag}>🪙 Gold</li>
                <li className={styles.exportTag}>💎 Emeralds</li>
                <li className={styles.exportTag}>🌾 Rice</li>
                <li className={styles.exportTag}>🎋 Sugarcane</li>
                <li className={styles.exportTag}>🍫 Cocoa Beans</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Visual Infographic Strip: Social Structure & Demographics */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Social Structure & Demographics</h2>

        <div className={styles.demoStrip}>
          {/* Column 1: Total Population */}
          <div className={styles.demoBlock}>
            <span className={styles.demoLabel}>Total Population</span>
            <div className={styles.bigStat}>49 842 298</div>
            <p className={styles.demoSubtext}>
              Concentrated primarily across the Andean highlands and the Caribbean coastal plains.
            </p>
          </div>

          {/* Column 2: Urban Population Meter */}
          <div className={styles.demoBlock}>
            <span className={styles.demoLabel}>Settlement Distribution</span>
            <div className={styles.urbanHeader}>
              <span className={styles.urbanPercent}>82% Urban</span>
              <span className={styles.ruralPercent}>18% Rural</span>
            </div>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: '82%' }} />
            </div>
            <p className={styles.demoSubtext}>
              Major urban hubs include Bogotá, Medellín, Cali, and Barranquilla.
            </p>
          </div>

          {/* Column 3: Major Ethnicities Breakdown */}
          <div className={styles.demoBlock}>
            <span className={styles.demoLabel}>Major Ethnicities</span>

            <div className={styles.stackedBar}>
              <div style={{ width: '87%', backgroundColor: '#38bdf8' }} title="White & Mestizo: 87%" />
              <div style={{ width: '7%', backgroundColor: '#fcd116' }} title="Afro-Colombian: 7%" />
              <div style={{ width: '4%', backgroundColor: '#10b981' }} title="Indigenous: 4%" />
              <div style={{ width: '2%', backgroundColor: '#f43f5e' }} title="Other: 2%" />
            </div>

            <ul className={styles.ethList}>
              <li className={styles.ethItem}>
                <span className={styles.ethDot} style={{ backgroundColor: '#38bdf8' }} />
                <span><strong className={styles.ethValue}>87%</strong> White & Mestizo</span>
              </li>
              <li className={styles.ethItem}>
                <span className={styles.ethDot} style={{ backgroundColor: '#fcd116' }} />
                <span><strong className={styles.ethValue}>7%</strong> Afro-Colombian</span>
              </li>
              <li className={styles.ethItem}>
                <span className={styles.ethDot} style={{ backgroundColor: '#10b981' }} />
                <span><strong className={styles.ethValue}>4%</strong> Indigenous</span>
              </li>
              <li className={styles.ethItem}>
                <span className={styles.ethDot} style={{ backgroundColor: '#f43f5e' }} />
                <span><strong className={styles.ethValue}>2%</strong> Other</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
           {/* Full-Size Image Lightbox Popup */}
        {isQuimbayaOpen && (
          <div
            className={styles.lightboxBackdrop}
            onClick={() => setIsQuimbayaOpen(false)}
          >
            <div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.lightboxClose}
                onClick={() => setIsQuimbayaOpen(false)}
                aria-label="Close full-size image"
              >
                ✕
              </button>
              <img
                src="quimbayaStatue.webp"
                alt="Full-size Pre-Columbian Quimbaya gold figurines"
                className={styles.lightboxImage}
              />
              <p className={styles.lightboxCaption}>
                <strong>Pre-Colombian Quimbaya Goldwork (c. 300 BC – 1000 AD)</strong>
              </p>
            </div>
          </div>
        )}
      </div>  
  );
}