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

      <section className={styles.section}>
        <article className={`${styles.card} ${styles.cardAccentTop}`}>
          <div>
            <h3>My Ties To Colombia</h3>
            <p>
              I have a deep relationship with Colombia. I was born in Cali, Valle del Cauca, and spent my early childhood in that beautiful city. My family has deep roots in Colombia, we have traced our lineage back several generations, to our ancestors who first made the voyage from Spain to the Americas.
            </p>
            <p>
              I hold many fond memories of the years I spent in Colombia; of its beautiful landscapes, delicious, savory cuisine, and the warmth of its people. I am proud of my heritage and the rich cultural history of Colombia, and I am grateful for the opportunity to share my personal connection to this country through this project.
            </p>
          </div>

          <div className={styles.metaPillRow}>
            <span className={styles.metaPill}>📍 Birthplace: Cali, Valle del Cauca</span>
            <span className={styles.metaPill}>🌎 Multi-Generational Colombian Heritage</span>
          </div>
        </article>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Unique Physical Geography</h2>
        <div className={styles.grid2}>
          <article className={styles.card}>
            <div>
              <h3>What Makes Colombia's Geography Stand Out</h3>
              <p>
                Colombia's physical geography is incredibly diverse, with a wide range of landscapes and ecosystems. It is uniquely positioned at the crossroads of South and Central America, is split by the Andes mountains, and is the only country in South America with coastlines on both the Pacific and Atlantic Oceans.
              </p>
              <p>
                Due to its unique geography, Colombia is listed as one of the world's "megadiverse" countries, hosting close to 10% of the planet's biodiversity. It hosts 314 types of ecosystems, including tropical rainforests, savannas, deserts, and high-altitude páramos. This diversity of landscapes and ecosystems makes Colombia a fascinating country to study in terms of physical geography.
              </p>
            </div>

            <div className={styles.metaPillRow}>
              <span className={styles.metaPill}>🌿 ~10% of Global Biodiversity</span>
              <span className={styles.metaPill}>🏔️ 314 Distinct Ecosystems</span>
              <span className={styles.metaPill}>🌊 Pacific & Caribbean Coasts</span>
            </div>
          </article>

          <figure className={styles.mediaFigure}>
            <img
              src="SierraNevadaSantaMarta.jpg"
              alt="Sierra Nevada de Santa Marta, Colombia"
              className={styles.mediaImage}
            />
            <figcaption className={styles.figcaption}>
              <strong>Geographic Highlight:</strong> Sierra Nevada de Santa Marta off Colombia's Caribbean coast. This mountain range is the highest coastal mountain range in the world. Photograph by Keith Ladzinski.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How the Earth Testifies of a Supreme Creator</h2>

        <blockquote className={styles.quoteBox}>
          “...all things denote there is a God; yea, even the earth, and all things that are upon the face of it, yea, and its motion, yea, and also all the planets which move in their regular form do witness that there is a Supreme Creator.”
          <span className={styles.quoteCitation}>— Alma 30:44</span>
        </blockquote>

        <article className={styles.card}>
          <div>
            <h3>Personal Reflection</h3>
            <p>
              The complexity and beauty of the earth is something that I struggle to truly comprehend. The intricate systems that work together to create landscapes, ecosystems, weather patterns, and biodiversity are testimony of the Lord's hand in creation. To me, the earth is a living testament to God's power, wisdom, and love. The beauty of the earth is a reminder of the divine nature of our Creator, and it inspires me to be a better steward of the earth and all that is upon it.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}