import styles from '../../styles/Layout.module.css';

export default function MapsLocation() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <span className={styles.badge}>Earth Processes • Topic 1</span>
        <h1 className={styles.title}>Maps, Location, and Cartographers</h1>
        <p className={styles.subtitle}>
          Geographic coordinates, projections, topographic mapping, and cartographic history of [Country Name].
        </p>
      </header>

      <section className={styles.section}>
        <article className={styles.card}>
          <h3>Weekly Research Overview</h3>
          <p>
            [TODO: Add your weekly research on Maps, Location, and Cartographers here.]
          </p>
        </article>
      </section>

      <section className={styles.section}>
        <div className={styles.grid2}>
          <figure className={styles.mediaFigure}>
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
              alt="Map or satellite view placeholder"
              className={styles.mediaImage}
            />
            <figcaption className={styles.figcaption}>
              <strong>Map / Satellite Imagery:</strong> [TODO: Replace with a map, chart, or satellite image of your country.]
            </figcaption>
          </figure>

          <div className={styles.videoCard}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/CMOoy776Pm4"
                title="Geographic Video Presentation"
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

      <section className={styles.section}>
        <div className={styles.card}>
          <h3>Documentaries, Podcasts & External Data</h3>
          <ul className={styles.resourceList}>
            <li className={styles.resourceItem}>
              <span><strong>Documentary / Map Archive:</strong> [TODO: Title of resource]</span>
              <a href="https://example.com" target="_blank" rel="noreferrer">View Resource →</a>
            </li>
            <li className={styles.resourceItem}>
              <span><strong>Podcast Episode:</strong> [TODO: Title of episode]</span>
              <a href="https://example.com" target="_blank" rel="noreferrer">Listen →</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}