import styles from '../../styles/Layout.module.css';

export default function ClimateBiomes() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <span className={styles.badge}>Earth Processes • Topic 5</span>
        <h1 className={styles.title}>Climate Controls, Biomes, and Climate Change</h1>
        <p className={styles.subtitle}>
          Atmospheric circulation, temperature (°C) and precipitation patterns, ecological biomes, and climate trends in [Country Name].
        </p>
      </header>

      <section className={styles.section}>
        <article className={styles.card}>
          <h3>Weekly Research Overview</h3>
          <p>
            [TODO: Add your weekly research on Climate Controls, Biomes, and Climate Change here.]
          </p>
        </article>
      </section>

      <section className={styles.section}>
        <div className={styles.grid2}>
          <figure className={styles.mediaFigure}>
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
              alt="Climate graph or biome photo placeholder"
              className={styles.mediaImage}
            />
            <figcaption className={styles.figcaption}>
              <strong>Climograph / Biome Map:</strong> [TODO: Replace with temperature (°C) / precipitation graph or biome map.]
            </figcaption>
          </figure>

          <div className={styles.videoCard}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/CMOoy776Pm4"
                title="Climate and Biomes Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className={styles.figcaption}>
              <strong>Featured Video:</strong> [TODO: Replace embed URL with your presentation or geographic video.]
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}