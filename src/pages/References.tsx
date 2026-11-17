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
          <h3>APA Citations</h3>
          <ul className={styles.apaList}>
            <li className={styles.apaItem}>
              ProQuest. (2026). Colombia: Land and Climate. CultureGrams Online Edition. Retrieved from http://online.culturegrams.com/world/world_country_sections.php?cid=35&cn=Colombia&sname=Land_and_Climate&snid=1.
            </li>
            <li className={styles.apaItem}>
              Convention on Biological Diversity. (2026). <em>Colombia: Biodiversity and Conservation</em>. Retrieved from https://www.cbd.int/countries/profile/?country=co
            </li>
            <li className={styles.apaItem}>
              ProQuest. (2026). Colombia: History. CultureGrams Online Edition. Retrieved from http://online.culturegrams.com/world/world_country_sections.php?cid=35&cn=Colombia&sname=History&snid=2.
            </li>
            <li className={styles.apaItem}>
              ProQuest. (2026). Colombia: General Attitudes. CultureGrams Online Edition. Retrieved from http://online.culturegrams.com/world/world_country_sections.php?cid=35&cn=Colombia&sname=General_Attitudes&snid=6.
            </li>
            <li className={styles.apaItem}>
              ProQuest. (2026). Colombia: Economy. CultureGrams Online Edition. Retrieved from http://online.culturegrams.com/world/world_country_sections.php?cid=35&cn=Colombia&sname=Economy&snid=19.
            </li>
            <li className={styles.apaItem}>
              Skyjems. (2026). Quimbaya Goldwork - Pre-Columbian Lost-Wax Casting From The Cauca Valley. Retrieved from https://skyjems.ca/pages/encyclopedia-quimbaya-goldwork
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}