import styles from '../../styles/Layout.module.css';

export default function WeatheringErosion() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <span className={styles.badge}>Earth Processes • Topic 3</span>
        <h1 className={styles.title}>Weathering, Mass Wasting, and Erosion</h1>
        <p className={styles.subtitle}>
          Chemical and mechanical weathering, landslide hazards, and erosional landscapes in [Country Name].
        </p>
      </header>

      <section className={styles.section}>
        <article className={styles.card}>
          <h3>Weekly Research Overview</h3>
          <p>
            [TODO: Add your weekly research on Weathering, Mass Wasting, and Erosion here.]
          </p>
        </article>
      </section>

      <section className={styles.section}>
        <div className={styles.grid2}>
          <figure className={styles.mediaFigure}>
            <img
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
              alt="Weathering and erosion placeholder"
              className={styles.mediaImage}
            />
            <figcaption className={styles.figcaption}>
              <strong>Erosional Landform / Chart:</strong> [TODO: Replace with photo, satellite image, or data chart.]
            </figcaption>
          </figure>

          <div className={styles.videoCard}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/CMOoy776Pm4"
                title="Weathering and Erosion Video"
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