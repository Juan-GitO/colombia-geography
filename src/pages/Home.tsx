import styles from '../styles/Layout.module.css';

export default function Home() {
  return (
    <div>
      {/* Video Hero Banner with Layered "Colombia" Title */}
      <section className={styles.videoHero}>
        {/* OPTION A: YouTube Background (Active right now) */}
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

      {/* Country Overview Sections (Scrolled into view below the video) */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Country Overview</h2>
        <div className={styles.grid2}>
          <article className={styles.card}>
            <h3>Historical Background</h3>
            <p>
              [TODO: Insert historical information about Colombia here—indigenous civilizations, colonial history, independence, and how the Andes and river valleys shaped settlement.]
            </p>
          </article>

          <article className={styles.card}>
            <h3>Cultural Heritage</h3>
            <p>
              [TODO: Insert cultural information here—regional diversity across the Caribbean, Pacific, Andean, and Llanos regions, music, traditions, and cuisine.]
            </p>
          </article>

          <article className={styles.card}>
            <h3>Social Structure & Demographics</h3>
            <p>
              [TODO: Insert social information here—population distribution across major cities like Bogotá, Medellín, Cali, and Barranquilla, and urban-rural geography.]
            </p>
          </article>

          <article className={styles.card}>
            <h3>Economic Profile</h3>
            <p>
              [TODO: Insert economic information here—coffee, agriculture, energy/mineral resources, biodiversity, and trade.]
            </p>
          </article>
        </div>
      </section>

      {/* Rubric Requirement: At least one representative photo on the Home page */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Landscape</h2>
        <figure className={styles.mediaFigure}>
          <img
            src="https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80"
            alt="Representative landscape of Colombia"
            className={styles.mediaImage}
          />
          <figcaption className={styles.figcaption}>
            <strong>Figure 1:</strong> [TODO: Replace photo or keep a representative Colombian landscape image and add your caption here.]
          </figcaption>
        </figure>
      </section>
    </div>
  );
}