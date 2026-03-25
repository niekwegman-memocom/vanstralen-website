import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function GroepenPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.pageHeader}>
          <div className={styles.container}>
            <h1>Groepen & Feesten</h1>
            <p>De perfecte locatie voor uw speciale gelegenheid</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <h2>Heeft u iets te vieren?</h2>
              <p>
                Dan bent u bij ons aan het juiste adres. Wij bieden u een verrassende feestlocatie
                en helpen u graag om uw feest of borrel naar uw wensen in te richten.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <h3>Aangepast Menu</h3>
                <p>
                  Wij kunnen eventueel ook een aangepast keuze-menu op maat verzorgen
                  geheel naar uw dieet en wensen!
                </p>
              </div>

              <div className={styles.featureCard}>
                <h3>Vanaf 6 Personen</h3>
                <p>
                  Wij verzorgen de groepmenu's vanaf 6 personen.
                  Perfect voor familie, vrienden of zakelijke bijeenkomsten.
                </p>
              </div>

              <div className={styles.featureCard}>
                <h3>Flexibele Opties</h3>
                <p>
                  Van intieme diners tot grotere feesten, wij denken graag met u mee
                  om uw evenement onvergetelijk te maken.
                </p>
              </div>
            </div>

            <div className={styles.cta}>
              <h2>Interesse?</h2>
              <p>
                Neem contact met ons op om de mogelijkheden te bespreken.
                Wij maken graag een voorstel op maat voor uw groep!
              </p>
              <a href="/contact" className={styles.ctaButton}>Contact Opnemen</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
