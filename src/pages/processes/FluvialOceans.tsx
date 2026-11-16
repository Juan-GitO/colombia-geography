import styles from '../../styles/Layout.module.css';

export default function FluvialOceans() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <span className={styles.badge}>Earth Processes • Topic 4</span>
        <h1 className={styles.title}>Fluvial Processes, Oceans, and Coastlines</h1>
        <p className={styles.subtitle}>
          River watersheds, drainage basins, marine currents, and coastal processes in [Country Name].
        </p>
      </header>

      <section className={styles.section}>
        <article className={styles.card}>
          <h3>Weekly Research Overview</h3>
          <p>
            [TODO: Add your weekly research on Fluvial Processes, Oceans, and Coastlines here.]
          </p>
        </article>
      </section>

      <section className={styles.section}>
        <div className={styles.grid2}>
          <figure className={styles.mediaFigure}>
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="Fluvial and coastal processes placeholder"
              className={styles.mediaImage}
            />
            <figcaption className={styles.figcaption}>
              <strong>Hydrology / Coastal Imagery:</strong> [TODO: Replace with river basin map, chart, or coastline photo.]
            </figcaption>
          </figure>

          <div className={styles.videoCard}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/CMOoy776Pm4"
                title="Fluvial Processes and Coastlines Video"
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