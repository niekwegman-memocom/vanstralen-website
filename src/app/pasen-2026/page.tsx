import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function PasenPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.pageHeader}>
          <div className={styles.container}>
            <h1>Pasen 2026</h1>
            <p>Vier Pasen bij VanStralen</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <h2>Paasweekend bij VanStralen</h2>
              <p>
                Dit jaar vieren we Pasen op bijzondere wijze bij VanStralen.
                Geniet van een heerlijk Paasmenu met uw familie en vrienden in onze warme,
                sfeervolle ambiance.
              </p>
            </div>

            <div className={styles.highlights}>
              <div className={styles.highlightCard}>
                <h3>🐣 Speciaal Paasmenu</h3>
                <p>
                  Een feestelijk menu vol met seizoensgebonden ingrediënten en heerlijke gerechten,
                  speciaal samengesteld voor het Paasweekend.
                </p>
              </div>

              <div className={styles.highlightCard}>
                <h3>🌷 Paasontbijt & Brunch</h3>
                <p>
                  Start uw Paasdag met een uitgebreide brunch, perfect voor het hele gezin.
                  Van zoet tot hartig, wij zorgen voor een gevarieerd aanbod.
                </p>
              </div>

              <div className={styles.highlightCard}>
                <h3>🍽️ Paasdiner</h3>
                <p>
                  Sluit de Paasdag af met een heerlijk diner. Onze chefs bereiden de mooiste
                  seizoensgebonden gerechten met zorg en passie.
                </p>
              </div>
            </div>

            <div className={styles.reservationBox}>
              <h3>Reserveren verplicht</h3>
              <p>
                Het Paasweekend is altijd een drukke periode. We raden u aan om tijdig te reserveren
                om teleurstelling te voorkomen.
              </p>
              <div className={styles.contactInfo}>
                <p><strong>Telefoon:</strong> 010-4148883</p>
                <p><strong>Email:</strong> etenbijvanstralen@outlook.com</p>
              </div>
              <a href="/contact" className={styles.reserveButton}>Reserveer nu</a>
            </div>

            <div className={styles.note}>
              <p>
                <em>Het definitieve Paasmenu wordt dichter bij de datum bekend gemaakt.
                Houdt onze website en sociale media in de gaten voor updates!</em>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
