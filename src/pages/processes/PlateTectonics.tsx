import styles from '../../styles/Layout.module.css';

export default function PlateTectonics() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <span className={styles.badge}>Earth Processes • Topic 2</span>
        <h1 className={styles.title}>Plate Tectonics, Earthquakes, and Volcanoes</h1>
        <p className={styles.subtitle}>
          Tectonic boundaries, seismic activity, fault systems, and volcanic landforms in [Country Name].
        </p>
      </header>

      <section className={styles.section}>
        <article className={styles.card}>
          <h3>Weekly Research Overview</h3>
          <p>
            [TODO: Add your weekly research on Plate Tectonics, Earthquakes, and Volcanoes here.]
          </p>
        </article>
      </section>

      <section className={styles.section}>
        <div className={styles.grid2}>
          <figure className={styles.mediaFigure}>
            <img
              src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80"
              alt="Tectonic chart or volcano photo placeholder"
              className={styles.mediaImage}
            />
            <figcaption className={styles.figcaption}>
              <strong>Seismic / Tectonic Map:</strong> [TODO: Replace with a fault map, seismic graph, or volcano photo.]
            </figcaption>
          </figure>

          <div className={styles.videoCard}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/CMOoy776Pm4"
                title="Plate Tectonics Video"
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