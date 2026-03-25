import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1>VanStralen</h1>
              <p className={styles.heroSubtitle}>
                Een plek waar je welkom bent voor een stevige brunch, lunch of een gezellig diner met familie of vrienden!
              </p>
            </div>
          </div>
        </section>

        <section className={styles.intro}>
          <div className={styles.container}>
            <h2 style={{ textAlign: 'center', color: 'var(--text-gray)' }}>Van Stralen</h2>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              Onze wisselende menukaart staat vol met seizoensgebonden gerechten. Zoals zacht gestoofde fazantenboutjes met zuurkool en een stoofpeertje
              of heerlijke chateaubriand Stroganoff aan tafel bereid! Van lunch tot laat is de hele kaart à la carte te bestellen.
            </p>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.container}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutText}>
                <h2>Een extra huiskamer</h2>
                <p>
                  Dit intieme, eigentijdse familiebedrijf in Kralingen, staat voor ultieme gastvrijheid.
                  Een ontmoetingsplek voor mensen uit de buurt oftewel een extra huiskamer.
                </p>
                <p>
                  Neem plaats op ons terras of aan een tafel aan een van de prachtige hoge ramen en ervaar een ontspannen Rotterdamse sfeer.
                  Laat u adviseren door ons enthousiaste personeel voor een heerlijke avond!
                </p>
              </div>
              <div className={styles.aboutImage}>
                <div className={styles.imagePlaceholder}>
                  <span>Restaurant sfeer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.reviews}>
          <div className={styles.container}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Wat onze gasten zeggen</h2>
            <div className={styles.reviewsGrid}>
              <div className={styles.reviewCard}>
                <p className={styles.reviewText}>
                  "Het was weer heerlijk, spareribs is een aanrader en de sfeer is altijd gezellig."
                </p>
                <p className={styles.reviewAuthor}>- Tevreden gast</p>
              </div>
              <div className={styles.reviewCard}>
                <p className={styles.reviewText}>
                  "Tijdje niet geweest, maar dat gaat niet meer gebeuren, wat hebben we weer lekker gegeten, en enorm goed bediend, bedankt was super tot gauw!"
                </p>
                <p className={styles.reviewAuthor}>- Vaste klant</p>
              </div>
              <div className={styles.reviewCard}>
                <p className={styles.reviewText}>
                  "Gisteren heerlijk gegeten en werden zo leuk ontvangen. Echt top. Een feestje om hier te eten."
                </p>
                <p className={styles.reviewAuthor}>- Recent bezoek</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Bezoek ons restaurant</h2>
            <p>Oudedijk 110-112, 3061 AN Rotterdam</p>
            <p>Woensdag t/m Zondag vanaf 12:00 uur</p>
            <a href="/contact" className={styles.ctaButton}>Contact & Reserveren</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
