import styles from '../styles/Layout.module.css';

export default function References() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <span className={styles.badge}>Sources & Citations</span>
        <h1 className={styles.title}>References</h1>
        <p className={styles.subtitle}>
          Trusted, peer-reviewed, and institutional sources organized in alphabetized APA format.
        </p>
      </header>

      <section className={styles.section}>
        <article className={styles.card}>
          <h3>Alphabetized APA Citations</h3>
          <ul className={styles.apaList}>
            <li className={styles.apaItem}>
              Author, A. A., & Author, B. B. (Year). <em>Title of work: Capital letter also for subtitle</em>. Publisher Name. https://doi.org/xxxx
            </li>
            <li className={styles.apaItem}>
              Central Intelligence Agency. (2026). <em>[Country Name]</em>. In The World Factbook. Retrieved November 15, 2026, from https://www.cia.gov/the-world-factbook/
            </li>
            <li className={styles.apaItem}>
              United States Geological Survey. (2026). <em>Tectonic summary and seismic hazard map of [Country Name]</em>. U.S. Department of the Interior. https://www.usgs.gov/
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}