import styles from '../styles/Layout.module.css';

export default function About() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <span className={styles.badge}>About & Reflection</span>
        <h1 className={styles.title}>About This Project</h1>
        <p className={styles.subtitle}>
          Personal connections, unique physical landscapes, and reflections on the Earth's creation.
        </p>
      </header>

      {/* Requirement 1: Personal Ties to the Country */}
      <section className={styles.section}>
        <article className={styles.card}>
          <h3>My Ties to [Country Name]</h3>
          <p>
            [TODO: Write brief details about your personal ties, interest, heritage, travel experiences, or why you chose to research this country.]
          </p>
        </article>
      </section>

      {/* Requirement 2: One Interesting Thing About Physical Geography */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Unique Physical Geography</h2>
        <div className={styles.grid2}>
          <article className={styles.card}>
            <h3>What Makes [Country Name]'s Geography Stand Out</h3>
            <p>
              [TODO: Describe one fascinating feature of the physical geography of your country—such as a mountain range, volcanic arc, river basin, desert, or coastline.]
            </p>
          </article>

          <figure className={styles.mediaFigure}>
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
              alt="Physical geography feature"
              className={styles.mediaImage}
            />
            <figcaption className={styles.figcaption}>
              <strong>Geographic Highlight:</strong> [TODO: Add a caption for your physical geography photo or map.]
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Requirement 3: Alma 30:44 & Reflection on the Creator */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How the Earth Testifies of a Supreme Creator</h2>

        <blockquote className={styles.quoteBox}>
          “...all things denote there is a God; yea, even the earth, and all things that are upon the face of it, yea, and its motion, yea, and also all the planets which move in their regular form do witness that there is a Supreme Creator.”
          <span className={styles.quoteCitation}>— Alma 30:44</span>
        </blockquote>

        <article className={styles.card}>
          <h3>Personal Reflection</h3>
          <p>
            [TODO: Write your response on how the Earth, its physical laws, planetary motion, and natural systems testify of the existence of a Supreme Being and Creator.]
          </p>
        </article>
      </section>
    </div>
  );
}